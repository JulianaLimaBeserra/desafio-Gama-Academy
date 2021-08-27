const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require ("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get("/", function(req, res) {
  res.json({message: "Hello World"});
});