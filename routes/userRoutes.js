const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");

// Create User
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get All Posts Of A User
router.get("/:userId/posts", async (req, res) => {
  try {
    const posts = await Post.find({
      authorId: req.params.userId,
    }).populate(
      "authorId",
      "name email"
    );

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;