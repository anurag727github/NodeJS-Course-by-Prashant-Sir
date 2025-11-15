//Core module
// const http = require('http');  <<<------ not required since express already uses http 

//External module
const express = require('express');

//Local module
// const requestHandler = require('./user')

const app = express();

app.get("/",(req, res, next) => {
  console.log("Come in first middleware",req.url, req.method);
  // res.send('<p>Welcome to the express server development</p>');
  next();
});
app.use("/result",(req, res, next) => {
  console.log("Come in result - middleware",req.url, req.method);
  res.send('<p>Welcome to result page</p>');
});
app.use("/",(req, res, next) => {
  console.log("Come in Second middleware",req.url, req.method);
  res.send('<p>Welcome to the express server development</p>');
});



// const server = http.createServer(app);  <<<------ not required since express already uses http 

app.listen(3001,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3001");
});