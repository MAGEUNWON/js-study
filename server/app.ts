import * as fs from 'fs';
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
import * as http from 'http';

interface readfiles{
  (path:string):void
}

const server = http.createServer((req:http.IncomingMessage , res:http.ServerResponse) =>{
  if(req.method === 'GET'){
    res.writeHead(200,{'Content-Type':'text/html'})
    const readfiles:readfiles =(path)=>{
      return fs.readFileSync(`${path}.txt`,'utf8')
    } 
  
    let data = `
      ${readfiles('header')}
      ${readfiles('main')}
      ${readfiles('footer')}
    `
    fs.writeFileSync('body.txt',data,'utf8')
  
    res.end(`
      ${readfiles('head')}
      ${readfiles('body')}
    `)
  }
})



server.listen(5000, () =>{
  console.log('서버가 작동되고 있습니다!')
})