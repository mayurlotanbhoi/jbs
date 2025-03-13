import mongoose, { Schema } from 'mongoose';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import autoIncrementFactory from 'mongoose-sequence';
import Joi from 'joi';

// Initialize the auto-increment plugin with the mongoose instance
// const autoIncrement = autoIncrementFactory(mongoose);

// Schema for auto-incrementing user IDs
const UserSeqSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
const UserSeq = mongoose.model('UserSeq', UserSeqSchema);


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile_number: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user_type: { type: String, enum: ['normal', 'admin'], default: 'normal' },
    dob: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    taluka: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true }
}, { timestamps: true });


const userValidation = Joi.object({

    name: Joi.string().required().messages({
        'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email address',
    }),
    mobile_number: Joi.string().pattern(/^\d{10}$/).required().messages({
        'any.required': 'Mobile number is required',
        'string.pattern.base': 'Invalid mobile number format',
    }),
    password: Joi.string().min(4).required().messages({
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
    }),

    address: Joi.string().required().messages({
        'any.required': 'Address is required',
    }),
    city: Joi.string().required().messages({
        'any.required': 'City is required',
    }),
    district: Joi.string().required().messages({
        'any.required': 'District is required',
    }),
    taluka: Joi.string().required().messages({
        'any.required': 'Taluka is required',
    }),
    state: Joi.string().required().messages({
        'any.required': 'State is required',
    }),
    dob: Joi.date().required().messages({
        'any.required': 'Date of birth is required',
        'date.base': 'Invalid date format',
    }),
});


// Middleware to handle user ID and password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            mobile_number: this.mobile_number,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema);

export {
    userValidation
};

