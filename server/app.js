"use strict";
exports.__esModule = true;
var fs = require("fs");
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
var http = require("http");
// const url = require('url');
var qs = require('querystring');
var obj = {
    results: []
};
// fs.readFile('./header.txt', 'utf8', (err:NodeJS.ErrnoException|null, data:string):void=>{
//   if(err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj)
// })
// readfile 일때 타입스크립트 버전
var server = http.createServer(function (req, res) {
    var method = req.method;
    var _url = req.url;
    // url 변수로 담아서 switch문 매개변수로 씀. 
    var readfiles = function (path) {
        return fs.readFileSync("./txt/".concat(path, ".txt"), 'utf8');
    };
    // txt 파일 읽는 함수. 한글로 인코딩
    var data = "\n  ".concat(readfiles('header'), "\n  ").concat(readfiles('main'), "\n  ").concat(readfiles('footer'), "\n  ");
    var inputText = "\n    <div><span>\uC5EC\uAE30\uB294 a\uB77C\uC6B0\uD130\uC57C</span></div>\n  ";
    // 그냥 테스트로 만든거
    var formText = "\n    <form name = \"file\" action = \"/b\" id = \"form\" method = \"post\">\n      <input type = \"text\" name = \"text\" id = \"input\">\n      <input type = \"submit\" value = \"\uCD9C\uB825\">\n    </form>\n  ";
    // form 태그 넣을 것 
    var resSet = function (statuscode, contentType, txtName, inputText, encode) {
        res.writeHead(statuscode, { 'Content-Type': contentType });
        fs.writeFileSync(txtName, inputText, encode);
        res.end("\n    ".concat(readfiles('head'), "\n    ").concat(readfiles('body'), "\n    "));
    };
    // 반복되는 부분 함수로 묶음. 
    switch (method) {
        case 'GET':
            switch (_url) {
                case "/":
                    console.log("/라우터");
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    fs.readFile('./txt/header.txt', 'utf8', function (err, data) {
                        if (err)
                            throw err;
                        console.log(typeof (data));
                        res.end(data);
                    });
                    resSet(200, "text/html", "./txt/body.txt", data, 'utf8');
                    break;
                case "/a":
                    console.log("a 라우터");
                    resSet(200, "text/html", "./txt/body.txt", inputText, 'utf8');
                    break;
                case "/b":
                    console.log("b라우터");
                    resSet(200, "text/html", "./txt/body.txt", formText, 'utf8');
                    break;
                case "/c":
                    console.log("c 라우터");
                    resSet(200, "text/html", "./txt/body.txt", "c라우터입니다", 'utf8');
                    break;
                case "/d":
                    console.log("d 라우터");
                    resSet(200, "text/html", "./txt/body.txt", "d라우터입니다", 'utf8');
                    break;
            }
            break;
        case 'POST':
            console.log("post임");
            var body_1 = "";
            // 빈 바디 준비, 여기에 data(chunk, 쿼리스트링 버퍼), 빈 배열로 만들어서 push하기도 함. 
            req.on('data', function (data) {
                body_1 += data;
                // body에 바로 data 저장
                console.dir(body_1);
                console.log(data);
                // 인코딩 하기 전이라 쿼리스트링 버퍼가 buffer어쩌구로 나옴. 
                data = data.toString('utf8');
                // 쿼리스트링 버퍼를 문자열 형태로 변환, 이러면 쿼리스트링을 프로그래밍적으로 처리할 수 있게 됨. 
                console.log(data, "data를 한글로 변환");
            });
            // 
            req.on('end', function () {
                // 더 이상 받을 데이터 없으면 호출, 콜백함수
                // const data = JSON.parse(body)
                // json 형식으로 바꿔보기. txt 파일을 배열에 담아서 하나씩 불러오기. 파일 이름이 키가되고 파일 안의 내용의 값이 되게. 얘를 불러서 json으로 바꿀것.
                console.log(body_1, "req.on 저장한 내용 내보냄");
                var post = qs.parse(body_1);
                console.log(post); //객체로 나옴. {text:'hi'}. 내가 필요한 건 'hi'부분만 필요 
                var text = post.text;
                // 그래서 빼냄. 
                fs.writeFileSync('./txt/value.txt', text, 'utf-8');
                // text 받은 값으로 새로운 txt 파일 만듬. 
                console.log(text);
                var t = "\n          ".concat(readfiles('value'), "\n        ");
                // txt파일 읽어서 string으로 출력 
                resSet(200, "text/html", "./txt/body.txt", t, 'utf8');
            });
    }
});
server.listen(5000, function () {
    console.log('서버가 작동되고 있습니다!');
});
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
