const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    movieId: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    posterPath: String,

    releaseDate: String,

    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Favorite",
  favoriteSchema
);