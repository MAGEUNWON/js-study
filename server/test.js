// const http = require('http')
// // console.log(typeof(http))
// const fs =require('fs')

// // import http from 'http';

// http.createServer(function(req, res){
//   const data = fs.readFileSync('./index.html');
//   res.writeHead(200, {"content-type" : "text/html; charset = utf-8"});
//   // console.log(typeof(res.writeHead))
//   res.write(data);
//   res.end();
// }).listen(5000, function(){
//   console.log('서버가 작동되고 있습니다!')
// })

import fs from 'fs';
import http from 'http';
// import { server } from 'typescript';

const server = http.createServer((req , res)=>{
  const head = fs.readFileSync('head.txt', 'utf8')
  const header = fs.readFileSync('header.txt', 'utf8')
  const main = fs.readFileSync('main.txt', 'utf8')
  const footer = fs.readFileSync('footer.txt', 'utf8')
  if(req.method === "GET"){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(`
    ${head}
      <body>
        ${header}
        ${main}
        ${footer}
      </body>
    `);
  }
  // else if(req.method === "POST"){
  //   let body = "";

  //   req.on('data', (data)=>{
  //     body += data;
  //     data = data.toString('utf8');
  //     console.log(body, "hi");
      
  //     res.statusCode = 200;
  //     res.setHeader('Content-type', 'text/html');
  //     res.end(main);
  //   });
  // }
})
server.listen(5000, function(){
  console.log('서버가 작동되고 있습니다!')
})