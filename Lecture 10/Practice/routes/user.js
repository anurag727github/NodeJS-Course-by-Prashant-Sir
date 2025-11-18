const path = require('path');

const express =  require('express');

const rootDir = require('../utils/pathUtil');

const user = express.Router();

user.get("/",(req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "welcome.html"));
});

module.exports = user ;