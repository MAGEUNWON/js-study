import * as fs from 'fs';
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
import * as http from 'http';
// const url = require('url');
const qs = require('querystring')
// post방식 query string으로 추출하기 위해 모듈 불러옴. 얘는 import는 안되나?

interface readfiles{
  (path:string):void
}


let obj = {
  results :[]
};

// fs.readFile('./header.txt', 'utf8', (err:NodeJS.ErrnoException|null, data:string):void=>{
//   if(err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj)
// })
// readfile 일때 타입스크립트 버전




const server = http.createServer((req:http.IncomingMessage , res:http.ServerResponse) =>{

  const method = req.method;
  const _url = req.url;
  // url 변수로 담아서 switch문 매개변수로 씀. 
  

  const readfiles:readfiles =(path)=>{
    return fs.readFileSync(`${path}.txt`,'utf8')
    } 
    // txt 파일 읽는 함수. 한글로 인코딩

  let data = `
  ${readfiles('header')}
  ${readfiles('main')}
  ${readfiles('footer')}
  ` 

  let inputText = `
    <div><span>여기는 a라우터야</span></div>
  `
  // 그냥 테스트로 만든거

  let formText = `
    <form name = "file" action = "/b" id = "form" method = "post">
      <input type = "text" name = "text" id = "input">
      <input type = "submit" value = "출력">
    </form>
  `
  // form 태그 넣을 것 
  

  const resSet = (statuscode:number, contentType:string, txtName:string, inputText:string, encode:any ) => {
    res.writeHead(statuscode,{'Content-Type':contentType})
    fs.writeFileSync(txtName, inputText, encode)
    res.end(`
    ${readfiles('head')}
    ${readfiles('body')}
    `)    
  }
  // 반복되는 부분 함수로 묶음. 

  
  switch(method){
    case 'GET':
      
      switch(_url) {
        case "/":
          console.log("/라우터")
          res.writeHead(200, {'Content-Type' : 'text/html'})
          fs.readFile('./header.txt', 'utf8', (err, data)=>{
            if(err) throw err;
            console.log(typeof(data));
            res.end(data)
          })
          resSet(200, "text/html", "body.txt", data, 'utf8' )
        break;
      
        case "/a":
          console.log("a 라우터")
          resSet(200, "text/html", "body.txt", inputText, 'utf8' )
          break;

        case "/b":
          console.log("b라우터")
          resSet(200, "text/html", "body.txt", formText, 'utf8' )
          break;

        case "/c":
          console.log("c 라우터")
          resSet(200, "text/html", "body.txt", "c라우터입니다", 'utf8' )
          break;

        case "/d":
          console.log("d 라우터")
          resSet(200, "text/html", "body.txt", "d라우터입니다", 'utf8' )
          break;
      }
    break;
    case 'POST':
      console.log("post임")
      let body = "";
      // 빈 바디 준비, 여기에 data(chunk, 쿼리스트링 버퍼), 빈 배열로 만들어서 push하기도 함. 
      req.on('data', (data)=>{
        body += data;
        // body에 바로 data 저장
        console.dir(body)
        console.log(data)
        // 인코딩 하기 전이라 쿼리스트링 버퍼가 buffer어쩌구로 나옴. 
        data = data.toString('utf8');
        // 쿼리스트링 버퍼를 문자열 형태로 변환, 이러면 쿼리스트링을 프로그래밍적으로 처리할 수 있게 됨. 
        console.log(data, "data를 한글로 변환");
      })
      // 
      req.on('end', ()=>{
        // 더 이상 받을 데이터 없으면 호출, 콜백함수
        // const data = JSON.parse(body)
        // json 형식으로 바꿔보기. txt 파일을 배열에 담아서 하나씩 불러오기. 파일 이름이 키가되고 파일 안의 내용의 값이 되게. 얘를 불러서 json으로 바꿀것.

        console.log(body, "req.on 저장한 내용 내보냄")
        const post = qs.parse(body);
        console.log(post) //객체로 나옴. {text:'hi'}. 내가 필요한 건 'hi'부분만 필요 
        const text = post.text;
        // 그래서 빼냄. 

        fs.writeFileSync('value.txt', text, 'utf-8')
        // text 받은 값으로 새로운 txt 파일 만듬. 
        console.log(text)

        let t = `
          ${readfiles('value')}
        `
        // txt파일 읽어서 string으로 출력 

        resSet(200, "text/html", "body.txt", t, 'utf8' )
      })
  }
})

server.listen(5000, () =>{
  console.log('서버가 작동되고 있습니다!')
})


 // *switch case 문 함수로 바꿔보기(모든 리터럴을 없애볼 것) , git commit 하기, text/json일 경우가 api 받아오는 형식 . txt 파일이 수백개여도 계속 동적으로 바꿔줄 수 있는 형태로 만들어 볼 것

  // if(req.method === 'GET'){

  //   switch (_url) {
  //     case "/":

  //       console.log("/라우터")
  //       res.writeHead(200,{'Content-Type':'text/html'})
  //       fs.writeFileSync('body.txt',data,'utf8')    
  //       res.end(`
  //         ${readfiles('head')}
  //         ${readfiles('body')}
  //       `)
  //       break;
      
  //     case "/a":
  //       console.log("a 라우터")
  //       res.writeHead(200,{'Content-Type':'text/html'})
  //       fs.writeFileSync('body.txt',"a라우터입니다",'utf8')
  //       res.end(`
  //       ${readfiles('head')}
  //       ${readfiles('body')}
  //       `)
  //       break;

  //     case "/b":
  //       console.log("b라우터")
  //       res.writeHead(200,{'Content-Type':'text/html'})
  //       fs.writeFileSync('body.txt',"b라우터입니다",'utf8')
  //       res.end(`
  //       ${readfiles('head')}
  //       ${readfiles('body')}
  //       `)
  //       break;

  //     case "/c":
  //       console.log("c 라우터")
  //       res.writeHead(200,{'Content-Type':'text/html'})
  //       fs.writeFileSync('body.txt',"c라우터입니다",'utf8')
  //       res.end(`
  //       ${readfiles('head')}
  //       ${readfiles('body')}
  //       `)
  //       break;

  //     case "/d":
  //       console.log("d 라우터")
  //       res.writeHead(200,{'Content-Type':'text/html'})
  //       fs.writeFileSync('body.txt',"d라우터입니다",'utf8')
  //       res.end(`
  //       ${readfiles('head')}
  //       ${readfiles('body')}
  //       `)
  //       break;

