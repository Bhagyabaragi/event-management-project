const express = require("express");
const Event = require("../models/event");
const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// Add a new event
router.post("/", async (req, res) => {
  const { name, date, location } = req.body;
  try {
    const newEvent = new Event({ name, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Failed to add event" });
  }
});

module.exports = router;
