const path = require('path');

const express = require('express');

const rootDir = require('../utils/pathUtil');

const host = express.Router();

host.get("/host/contact-us",(req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "form.html"));
});

host.post("/host/contact-us",(req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "submit.html"));
});

module.exports = host ;