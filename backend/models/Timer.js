const mongoose = require("mongoose");

const TimerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    timeSpent: { type: Number, default: 0 },
});

module.exports = mongoose.model("Timer", TimerSchema);
