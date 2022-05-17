/**
 * imports
 */
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import router from "./routes/routes.js";

/**
 * Constants
 */
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Use needed for the app
 */
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name: 'exam_node',
    secret: 'ahh',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(router);

/**
 * Server
 */
app.listen(process.env.PORT, () => {
    console.log(`App listening on http://${process.env.HOSTNAME}:${process.env.PORT}`);
});