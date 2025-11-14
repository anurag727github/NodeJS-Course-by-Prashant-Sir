const sumRequestHandler  = require('./user');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write(`
      <body>
        <h1>Welcome to the Calculator</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>`);
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase()==='/calculator') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write(`
      <body>
        <h1>This is the Calculator</h1>
        <form action="/calculator-result" method="POST">
          <input type="number" name="num1" placeholder="Enter first number"/>
          <input type="number" name="num2" placeholder="Enter second number"/>
          <br><br>
          <button type='submit' value='sum'>Calculate Sum</button>
        </form>
      </body>`);
    res.write('</html>');
    return res.end();
  }else if(req.url.toLowerCase()==='/calculator-result' && 
  req.method==='POST') {
    return sumRequestHandler(req, res);
  }
}; 

module.exports = requestHandler;