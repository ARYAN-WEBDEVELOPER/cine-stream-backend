const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const User = require("../models/User");

// Upload Profile + Create User
router.post(
  "/upload",
  upload.single("image"),
  async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { email: req.body.email },
        {
          name: req.body.name,
          profileImage: req.file?.path,
        },
        {
          returnDocument: "after",
          upsert: true,
        }
      );

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);
module.exports = router;