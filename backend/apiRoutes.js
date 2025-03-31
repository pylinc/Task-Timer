const express = require("express");
const router = express.Router();

// Example Task Timer API
router.get("/tasks", (req, res) => {
  res.json({ message: "Task list will be returned here" });
});

router.post("/tasks", (req, res) => {
  res.json({ message: "New task will be created here", data: req.body });
});

module.exports = router;
