/**
 * Imports
 */
import { Schema, model } from "mongoose";

/**
 * Schema
 */
const winSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    bakery: {
        type: Schema.Types.ObjectId,
        ref: 'bakery'
    }
}, {
    timestamps: true
});

/**
 * Model 
 */
const winModel = model('win', winSchema);

/**
 * Export
 */
export default winModel;