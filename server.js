const express = require("express");
const app = express();

app.set("view engine", "pug");

const router = require('./routes/index.js')
app.use('/', router)
app.listen(3000); // Port 3000

