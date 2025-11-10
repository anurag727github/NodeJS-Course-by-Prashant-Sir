const http = require('http');
const requestHandler =require('./cal');
const server = http.createServer( requestHandler);

server.listen(3001,() => {
  console.log("Server is now open at http://localhost:3001");
});