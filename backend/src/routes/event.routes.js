import { Router } from "express";
import { attendEvent, createEvent, getEventsByCity, getEventWithPosts, postOnEvent } from "../controllers/event.controller.js";
import { authenticateToken } from "../controllers/auth.controller.js";

const router = Router();

router.route('/create-event').post(authenticateToken, createEvent)
router.route('/get-event').get(authenticateToken, getEventsByCity)
router.route('/:eventId/attend').post(authenticateToken, attendEvent)
router.route('/:eventId/post').post(authenticateToken, postOnEvent)
router.route('/:eventId').get(authenticateToken, getEventWithPosts)

// /api/events/:eventId/attend




export default router


