const http = require('http');
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

server.listen(3000,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3000");
});