const message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { MongoClient } = require("mongodb");

const uri = process.env.URI

const client = new MongoClient(uri);
const database = client.db("messages");

exports.index = asyncHandler(async (req, res, next) => {
  const data = await database.collection("messages").find().toArray();
  res.render("index", { title: "Message Board", messages: data });
});

exports.post = (req, res) => {
  database.collection('messages').insertOne({...req.body, date: new Date().toLocaleDateString()})
  res.redirect('/')
}