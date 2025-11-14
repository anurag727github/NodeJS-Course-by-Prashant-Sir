const http = require('http');
const requestHandler = require('./user')

const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
  testSyntax();
});

server.listen(3000,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3000");
});