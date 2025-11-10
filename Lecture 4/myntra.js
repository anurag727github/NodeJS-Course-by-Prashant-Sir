const http = require('http');

const server = http.createServer(function requestListener(req,res){
  console.log(req.url, req.method);

  if(req.url.toLowerCase()==="/home"){
    res.write("<h1>Welcome to Home Page</h1>");
    return res.end();
  }else if(req.url.toLowerCase()==="/men"){
    res.write("<h1>Welcome to Men's Section</h1>");
    return res.end();
  }else if(req.url.toLowerCase()==="/women"){
    res.write("<h1>Welcome to Women's Section</h1>");
    return res.end();
  }else if(req.url.toLowerCase()==="/kids"){
    res.write("<h1>Welcome to Kids Section</h1>");
    return res.end();
  }else if(req.url.toLowerCase()==="/cart"){
    res.write("<h1>Welcome to Cart Section</h1>");
    return res.end();
  }

  //Auxilary url page view content
  res.write(`
    <html lang="en">
      <head>
        <title>Myntra Website</title>
      </head>
      <body><head>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
        </head>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3001, () => {
  console.log("server is live at http://localhost:3001");
});