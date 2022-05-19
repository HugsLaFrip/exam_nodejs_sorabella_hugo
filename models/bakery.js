/**
 * imports
 */
import mongoose from "mongoose";

/**
 * Schema
 */
const bakerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 40
    },
    photoPath: {
        type: String,
        default: 'default_bakery.png'
    }
});

/**
 * Model
 */
const bakeryModel = mongoose.model('bakery', bakerySchema);

/**
 * Export
 */
export default bakeryModel;