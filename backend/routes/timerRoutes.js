const express = require("express");
const Timer = require("../models/Timer");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all timers for a user
router.get("/", authMiddleware, async (req, res) => {
    const timers = await Timer.find({ userId: req.userId });
    res.json(timers);
});

// Add a timer
router.post("/", authMiddleware, async (req, res) => {
    const { name } = req.body;
    const timer = new Timer({ userId: req.userId, name, timeSpent: 0 });
    await timer.save();
    res.status(201).json(timer);
});

// Update timer (time spent)
router.put("/:id", authMiddleware, async (req, res) => {
    const { timeSpent } = req.body;
    const timer = await Timer.findByIdAndUpdate(req.params.id, { timeSpent }, { new: true });
    res.json(timer);
});

// Delete timer
router.delete("/:id", authMiddleware, async (req, res) => {
    await Timer.findByIdAndDelete(req.params.id);
    res.json({ message: "Timer deleted" });
});

module.exports = router;
