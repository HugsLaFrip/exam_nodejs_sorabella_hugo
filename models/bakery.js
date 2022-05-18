/**
 * imports
 */
import { Schema, model } from "mongoose";

/**
 * Schema
 */
const bakerySchema = new Schema({
    name: {
        type: String,
        required: true,
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
const bakeryModel = model('bakery', bakerySchema);

/**
 * Export
 */
export default bakeryModel;