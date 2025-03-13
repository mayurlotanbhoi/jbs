import mongoose from 'mongoose';
import Joi from 'joi';

const eventSchema = new mongoose.Schema({

    eventCityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference the User model
        required: true
    },
    heading: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    attendees: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User", // Reference to the User model
                required: true
            },
            joinedAt: { type: Date, default: Date.now }
        }
    ],
    posts: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            comment: {
                type: String,
                required: true,
                trim: true,
                maxlength: 500
            },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });



export const validateEvent = Joi.object({
    eventCityId: Joi.custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helpers.error("any.invalid");
        }
        return new mongoose.Types.ObjectId(value); // Ensure it's stored as an ObjectId
    })
        .required()
        .messages({
            "any.invalid": "Invalid eventCityId format. Must be a valid ObjectId.",
            "any.required": "eventCityId is required."
        }),
    heading: Joi.string().max(100).trim().required().messages({
        'string.empty': 'Event heading is required',
        'string.max': 'Heading should not exceed 100 characters'
    }),
    date: Joi.date().iso().required().messages({
        'date.base': 'Invalid date format',
        'any.required': 'Event date is required'
    }),
    description: Joi.string().max(500).trim().required().messages({
        'string.empty': 'Event description is required',
        'string.max': 'Description should not exceed 500 characters'
    }),
    city: Joi.string().max(100).trim().required().messages({
        'string.empty': 'Event city is required',
        'string.max': 'city should not exceed 100 characters'
    }),
});





const Event = mongoose.model('Event', eventSchema);
export default Event;
