/**
 * Imports
 */
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

/**
 * Connection
 */
const dbConnect = mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@cluster0.0jahg.mongodb.net/${process.env.DB_NAME}`)
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log('ERROR : ' + err));

/**
 * Export
 */
export default dbConnect;