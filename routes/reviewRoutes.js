const express = require("express");
const router = express.Router();

const Review = require("../models/Review");

// Create Review
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Review
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Review deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;