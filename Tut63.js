// console.log("Hello world");
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World Basit ali');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container {
              border: 3px solid red;
              background-color: azure;
              padding: 35px;
              margin: 35px auto;
              width: 777px;
              
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(180, 33, 28);
              background-color: rgb(207, 183, 183);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color: aqua;
          }
          .btn{
              background-color: rgb(125, 125, 192);
              padding: 7px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 6px;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti recusandae iusto doloremque, fuga sunt
              beatae excepturi soluta voluptatum, iste vitae dolorem adipisci sequi ad perspiciatis numquam facere! Et ea
              ullam nobis amet alias.</p>
          <a href="https://Google.com" class="btn">Readmore</a>
          <button class="btn">Contact us</button>
  
      </div>
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
