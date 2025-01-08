const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res)=>{
  
  // let url = request.url;
  // let queryData = url.parse(url, true).query;
  // console.log(queryData);

  const test = fs.readFileSync('./index.html',(err, data)=>{
    if(err) throw err;
  });
  //동기처리. 파일을 먼저 읽고나서 그 후에 GET요청 실행하려면 readFileSync 쓰기. 파일 읽어 오는 동안 전체 프로세스가 멈추고 데이터를 가져 온 후 진행. (readFile은 비동기)

  const input =
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="./style.js" defer></script>
  </head>
  <body>
    <div id = "app">이것은 문서입니다.</div>
    
    <form name = "proFile" action="http://localhost:5678" method="get" id = "form">
      <input type="text" name="id" id = "input">
      <input type="submit" value="출력">
    </form>
    <span></span> 
  </body>
  </html>`
  
  
  const css = fs.readFileSync("./style.css", (err)=>{
    if(err) throw err;
  })

  const js = fs.readFileSync("./style.js", (err)=>{
    if(err) throw err;
  })
  //readFile은 비동기, readFileSync는 동기 
  //동기 메서드를 사용하면 요청이 많이 들어 올 때 성늘에 문제가 생김. 이전 작업 완료될 때까지 다음 작업을 진행할 수x. 매우 비효율
  //비동기 방식으로 진행하되 순서를 유지하기 위해서는 readFile의 콜백에 다음 readFile을 넣으면 됨. 하지만 이건 콜백지옥이 생김. 
  //콜백 지옥이 생기지 않고 순서를 유지하려면 promise나 async/await를 사용하면 됨.

  const get = fs.readFileSync('./get.html', (err,data)=>{
    if(err) throw err;
    // console.log(data);
  });


  if(req.method === "GET"){
    if(req.url === "/"){
      console.log("get");

      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(input);
      res.end();    

    } else if (req.url === "/form"){
      // let data = req.query.id;
      console.log("input?");
      
      res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
      res.write(input);
      // res.write(JSON.stringify(get));
      res.end();    
      //Buffer(버퍼)는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 비워두고 파일 데이터 메모리를 저장. 이 때 메모리에 저장된 데이터가 퍼버임. 
      //from(string) : 문자열을 버퍼로 바꿈. 
      //toString(buffer) : 버퍼를 문자열로 바꿈. 
      //concat(array) : 배열 안의 버퍼들을 하나로 합침. 
      //버퍼가 readFile을 할 때 편리하긴 하지만 파일의 용량이 크고 많아지면 문제가 발생할 수 있음. 그래서 버퍼의 크기를 작게 만든 후 여러번으로 나눠 보내는 방식인 스트림이 등장.
      //데이터가 나눠진 조각을 chunk라고 함. 

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

// get 방식의 form, input 태그 만들어보기. 만들어서 넘기면 그 내용 다시 보여줘 