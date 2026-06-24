const express = require("express");
const router = express.Router();

const Favorite = require("../models/Favorite");

// Add Favorite
router.post("/", async (req, res) => {
  try {
    const favorite = await Favorite.create(
      req.body
    );

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Favorites
router.get("/", async (req, res) => {
  try {
    const favorites =
      await Favorite.find();

    res.json(favorites);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Favorite
router.delete("/:movieId", async (req, res) => {
  try {
    await Favorite.findOneAndDelete({
      movieId: req.params.movieId,
    });

    res.json({
      message: "Favorite removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;