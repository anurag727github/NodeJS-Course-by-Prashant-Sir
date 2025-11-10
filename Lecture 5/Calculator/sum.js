

const sumRequestHandler = (req,res) => {
  console.log('Inside sum request handler', req.url);
  const body =[];
  req.on("data", chunk => body.push(chunk));
  req.on("end", () => {
    const fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    const result = parseInt(bodyObject.num1) + parseInt(bodyObject.num2);
    console.log(result);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write(`
      <body>
        <h1>Your Sum is ${result}</h1>
      </body>`);
    res.write('</html>');
    return res.end();
  });
};

module.exports = sumRequestHandler;