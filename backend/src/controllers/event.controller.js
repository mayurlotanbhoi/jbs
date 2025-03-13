import { asynchandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import Event, { validateEvent } from "../models/event.model.js";
import mongoose from "mongoose";


export const createEvent = asynchandler(async (req, res, next) => {
    // const { error } = validateEvent(req.body);
    const isoDate = new Date(req.body.date).toISOString();
    const { _id, city, user_type } = req.user
    if (user_type !== 'admin') {
        throw new ApiError(400, 'Only admin can add avent');
    }
    console.log("req.user", req.user)
    req.body.date = isoDate
    req.body.city = city
    console.log("_id", _id)
    req.body.eventCityId = _id
    const { error, value } = validateEvent.validate(req.body);
    if (error) throw new ApiError(400, error?.details[0]?.message || 'Validation Faild');
    try {
        const event = new Event(req.body);
        await event.save();
        return res.status(201).json(
            new ApiResponse(201, event, "Event created successfully")
        );
    } catch (err) {
        console.log(err);
        next(err)
    }

});


export const getEventsByCity = asynchandler(async (req, res, next) => {
    try {
        const { city } = req.user; // Get user's city from req.user

        console.log("city", city)
        if (!city) throw new ApiError(400, "City is required");
        const events = await Event.find({ city }).sort({ date: 1 }); // Fetch events by city
        if (!events.length) {
            throw new ApiError(404, "No events found for this city");
        }

        return res.status(200).json(
            new ApiResponse(200, events, "Events fetched successfully")
        );
    } catch (err) {
        console.log("Get Events Error:", err);
        next(err);
    }
});

export const attendEvent = asynchandler(async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const { _id: userId } = req.user; // Get user ID from token

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            throw new ApiError(400, "Invalid Event ID");
        }

        const event = await Event.findById(eventId);
        if (!event) throw new ApiError(404, "Event not found");

        // Check if user is already an attendee
        const alreadyJoined = event.attendees.some(att => att.userId.equals(userId));
        if (alreadyJoined) {
            throw new ApiError(400, "User already joined this event");
        }

        event.attendees.push({ userId });
        await event.save();
        return res.status(200).json(
            new ApiResponse(200, event, "User successfully joined the event")
        );
    } catch (err) {
        console.log("Attend Event Error:", err);
        next(err);
    }
});


export const getEventWithAttendees = asynchandler(async (req, res, next) => {
    try {
        const { eventId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            throw new ApiError(400, "Invalid Event ID");
        }

        const event = await Event.findById(eventId)
            .populate("eventCityId", "name email") // Populate event creator
            .populate("attendees.userId", "name email"); // Populate attendees

        if (!event) throw new ApiError(404, "Event not found");

        return res.status(200).json(
            new ApiResponse(200, event, "Event details fetched successfully")
        );
    } catch (err) {
        console.log("Get Event Error:", err);
        next(err);
    }
});



export const postOnEvent = asynchandler(async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const { _id: userId } = req.user; // Get user ID from token
        const { comment } = req.body;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            throw new ApiError(400, "Invalid Event ID");
        }
        if (!comment || comment.trim() === "") {
            throw new ApiError(400, "Comment cannot be empty");
        }

        const event = await Event.findById(eventId);
        if (!event) throw new ApiError(404, "Event not found");

        // Add new comment
        event.posts.push({ userId, comment });
        await event.save();

        return res.status(200).json(
            new ApiResponse(200, event, "Comment posted successfully")
        );
    } catch (err) {
        console.log("Post Comment Error:", err);
        next(err);
    }
});


export const getEventWithPosts = asynchandler(async (req, res, next) => {
    try {
        const { eventId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            throw new ApiError(400, "Invalid Event ID");
        }

        const event = await Event.findById(eventId)
            .populate("eventCityId", "name email") // Populate event creator
            .populate("attendees.userId", "name email") // Populate attendees
            .populate("posts.userId", "name email"); // Populate post users

        if (!event) throw new ApiError(404, "Event not found");

        return res.status(200).json(
            new ApiResponse(200, event, "Event details fetched successfully")
        );
    } catch (err) {
        console.log("Get Event Error:", err);
        next(err);
    }
});





