const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  
  const test = fs.readFileSync('./index.html',(err, data)=>{
    if(err) throw err;
  });
  //동기처리. 파일을 먼저 읽고나서 그 후에 GET요청 실행하려면 readFileSync 쓰기. 파일 읽어 오는 동안 전체 프로세스가 멈추고 데이터를 가져 온 후 진행. (readFile은 비동기)
  
  const css = fs.readFileSync("./style.css", (err)=>{
    if(err) throw err;
  })

  const js = fs.readFileSync("./style.js", (err)=>{
    if(err) throw err;
  })

  if(req.method === "GET"){
    if(req.url === "/"){
      console.log("하...");

      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(test);
      res.end();    

    } else if(req.url === "/style.css"){ 
      //요청은 html header에 있음. 
      console.log("무슨모양");

      res.writeHead(200, {"Content-Type" : "text/css"});
      res.write(css);
      res.end();    

    } else if(req.url === "/style.js"){
      console.log("js?");

      res.writeHead(200, {"Content-Type" : "text/javascript"});
      res.write(js);
      res.end();  

    }

    console.log(req.url)
    //GET의 특징은 url(/)을 읽음
  }
});

server.listen(5678, (err)=>{
  console.log('서버 시작');
  if(err) throw err;
})

