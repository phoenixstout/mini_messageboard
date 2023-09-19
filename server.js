const express = require("express");

const app = express();

// for parsing post json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.set("view engine", "pug");

const router = require('./routes/index.js')
app.listen(3000); // Port 3000
app.use('/', router)

