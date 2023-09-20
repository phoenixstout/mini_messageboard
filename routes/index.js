const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/messageController");

router.get("/", message_controller.index);

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", message_controller.post);

module.exports = router;
