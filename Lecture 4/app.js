const http = require('http');

const server = http.createServer(function requestListener(req, res) {
  //created a server and set 3 values that server can see when any user visits it
  console.log(req.url,req.method,req.headers);
   res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>Hello: Anurag using node server!!</title></head>");

  if(req.url==='/'){
    res.write("<h1>Welcome to Home Page</h1>");
    return res.end();
  }else if(req.url.toLowerCase()==='/products'){
    res.write("<h1>You are in Products section</h1>");
    return res.end();
  }

    res.write("<body><h1>you are in new page</h1></body>");
    res.write("</html>");
    return res.end();
});

server.listen(3000,()=> {
  console.log("Server is now open at http://localhost:3000");
});