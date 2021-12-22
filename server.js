const bodyParser = require("body-parser");
const concurrently = require("concurrently");
const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());