const express = require("express");
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages: messages, title: "Mini Messageboard" });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.content,
    user: req.body.user,
    added: new Date().toDateString(),
  })
  res.redirect('/')
});

module.exports = router;
