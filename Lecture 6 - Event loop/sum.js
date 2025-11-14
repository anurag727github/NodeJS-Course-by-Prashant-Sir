

const sumRequestHandler = (req,res) => {
  console.log('1. Inside sum request handler', req.url);
  
  let result ;
  const body =[];
  req.on("data", chunk => {
    body.push(chunk);
    console.log('2. chunk came');
  });
  req.on("end", () => {
    console.log('3. End event came');
    const fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    result = parseInt(bodyObject.num1) + parseInt(bodyObject.num2);
    console.log(result);
  });
  
    console.log('4. print result using here for 4th step');
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write(`
      <body>
        <h1>Your Sum is ${result}</h1>
      </body>`);
    res.write('</html>');
    return res.end();
};

module.exports = sumRequestHandler;