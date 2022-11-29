import * as fs from 'fs';
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
import * as http from 'http';
// const url = require('url');

interface readfiles{
  (path:string):void
}

const server = http.createServer((req:http.IncomingMessage , res:http.ServerResponse) =>{

  const _url = req.url;

  const readfiles:readfiles =(path)=>{
    return fs.readFileSync(`${path}.txt`,'utf8')
    } 

  let data = `
  ${readfiles('header')}
  ${readfiles('main')}
  ${readfiles('footer')}
  `


  
  if(req.method === 'GET'){

    switch (_url) {
      case "/":

        console.log("/라우터")
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.writeFileSync('body.txt',data,'utf8')    
        res.end(`
          ${readfiles('head')}
          ${readfiles('body')}
        `)
        break;
      
      case "/a":
        console.log("a 라우터")
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.writeFileSync('body.txt',"a라우터입니다",'utf8')
        res.end(`
        ${readfiles('head')}
        ${readfiles('body')}
        `)
        break;

      case "/b":
        console.log("b라우터")
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.writeFileSync('body.txt',"b라우터입니다",'utf8')
        res.end(`
        ${readfiles('head')}
        ${readfiles('body')}
        `)
        break;

      case "/c":
        console.log("c 라우터")
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.writeFileSync('body.txt',"c라우터입니다",'utf8')
        res.end(`
        ${readfiles('head')}
        ${readfiles('body')}
        `)
        break;

      case "/d":
        console.log("d 라우터")
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.writeFileSync('body.txt',"d라우터입니다",'utf8')
        res.end(`
        ${readfiles('head')}
        ${readfiles('body')}
        `)
        break;
    }
    // *switch case 문 함수로 바꿔보기(모든 리터럴을 없애볼 것) , git commit 하기, text/json일 경우가 api 받아오는 형식 . txt 파일이 수백개여도 계속 동적으로 바꿔줄 수 있는 형태로 만들어 볼 것

    // if (_url === "/") {

    //   console.log("/라우터")
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   fs.writeFileSync('body.txt',data,'utf8')
  
    //   res.end(`
    //     ${readfiles('head')}
    //     ${readfiles('body')}
    //   `)
        
    // } else if(_url === "/a") {
    //   console.log("a라우터")
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   fs.writeFileSync('body.txt',"a라우터입니다",'utf8')
    //   res.end(`
    //   ${readfiles('head')}
    //   ${readfiles('body')}
    //   `)

    // } else if(_url === "/b") {
    //   console.log("b라우터")
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   fs.writeFileSync('body.txt',"b라우터입니다",'utf8')
    //   res.end(`
    //   ${readfiles('head')}
    //   ${readfiles('body')}
    //   `)

    // } else if(_url === "/c") {
    //   console.log("c라우터")
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   fs.writeFileSync('body.txt',"c라우터입니다",'utf8')
    //   res.end(`
    //   ${readfiles('head')}
    //   ${readfiles('body')}
    //   `)
      
    // } else if(_url === "/d") {
    //   console.log("d라우터")
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   fs.writeFileSync('body.txt',"d라우터입니다",'utf8')
    //   res.end(`
    //   ${readfiles('head')}
    //   ${readfiles('body')}
    //   `)
    // }
  } 
})



server.listen(5000, () =>{
  console.log('서버가 작동되고 있습니다!')
})