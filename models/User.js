/**
 * imports
 */
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

/**
 * Schema
 */
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 75,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail],
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        validate: [validator.isStrongPassword],
        max: 1024,
        trim: true
    },
    nextTry: {
        type: Date,
        default: new Date('now')
    }
}, {
    timestamps: true
});

/**
 * PrePersist
 */
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

/**
 * Model
 */
const userModel = mongoose.model('user', userSchema);

/**
 * Export
 */
export default userModel;