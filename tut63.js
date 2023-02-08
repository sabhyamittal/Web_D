//console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <form>
          <div>username:
              <input type="text" name="username" id="username" placeholder="Enter your username">
          </div>
          <br>
          <div>Password:
              <input type="password" name="pass" id="pass" placeholder="Enter your password">
          </div>
          <br>
          <div>
              Address:
                  <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          </div>
          <br>
          <div>
              <input type="submit">
          </div>
  
      </form>
  </body>
  
  </html>
 `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

