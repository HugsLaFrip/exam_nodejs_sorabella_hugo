/**
 * Imports
 */
import mongoose from "mongoose";

/**
 * Schema
 */
const winSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bakery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bakery'
    }
}, {
    timestamps: true
});

/**
 * Model 
 */
const winModel = mongoose.model('win', winSchema);

/**
 * Export
 */
export default winModel;