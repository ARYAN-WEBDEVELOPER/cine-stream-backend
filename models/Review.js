const mongoose = require("mongoose");

const reviewSchema =
  new mongoose.Schema(
    {
      movieId: {
        type: Number,
        required: true,
      },

      movieTitle: {
        type: String,
        required: true,
      },

      review: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Review",
    reviewSchema
  );