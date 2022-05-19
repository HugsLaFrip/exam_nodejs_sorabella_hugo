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
import dbConnect from "./config/connectMongo.js";
import flash from "connect-flash";
import MongoStore from "connect-mongo";

import flashMessages from "./middlewares/flashMessages.js";
import sessionToTemplate from "./middlewares/session.js";
import isGameFinished from "./middlewares/isGameFinished.js";

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
    secret: process.env.SESSION_TOKEN,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@cluster0.0jahg.mongodb.net/${process.env.DB_NAME}` })
}))
app.use(flash());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

/**
 * Middlewares
 */
app.use(flashMessages);
app.use(sessionToTemplate);
app.use(isGameFinished);

/**
 * Router
 */

app.use(router);

/**
 * Server
 */
app.listen(process.env.PORT, () => {
    console.log(`App listening on http://${process.env.HOSTNAME}:${process.env.PORT}`);
});