"use strict";
exports.__esModule = true;
var fs = require("fs");
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
var http = require("http");
var server = http.createServer(function (req, res) {
    var method = req.method;
    var _url = req.url;
    // const pathName = url.parse(_url, true).pathName
    var readfiles = function (path) {
        return fs.readFileSync("".concat(path, ".txt"), 'utf8');
    };
    var data = "\n  ".concat(readfiles('header'), "\n  ").concat(readfiles('main'), "\n  ").concat(readfiles('footer'), "\n  ");
    var inputText = "\n    <div><span>\uC5EC\uAE30\uB294 a\uB77C\uC6B0\uD130\uC57C</span></div>\n  ";
    var formText = "\n    <form name = \"file\" action = \"\" id = \"form\" method = \"post\">\n      <input type = \"text\" name = \"id\" id = \"input\">\n      <input type = \"submit\" value = \"\uCD9C\uB825\">\n    </form>\n  ";
    var resSet = function (statuscode, contentType, txtName, inputText, encode) {
        res.writeHead(statuscode, { 'Content-Type': contentType });
        fs.writeFileSync(txtName, inputText, encode);
        res.end("\n    ".concat(readfiles('head'), "\n    ").concat(readfiles('body'), "\n    "));
    };
    switch (method) {
        case 'GET':
            switch (_url) {
                case "/":
                    console.log("/라우터");
                    resSet(200, "text/html", "body.txt", data, 'utf8');
                    break;
                case "/a":
                    console.log("a 라우터");
                    resSet(200, "text/html", "body.txt", inputText, 'utf8');
                    break;
                case "/b":
                    console.log("b라우터");
                    resSet(200, "text/html", "body.txt", formText, 'utf8');
                    break;
                case "/c":
                    console.log("c 라우터");
                    resSet(200, "text/html", "body.txt", "c라우터입니다", 'utf8');
                    break;
                case "/d":
                    console.log("d 라우터");
                    resSet(200, "text/html", "body.txt", "d라우터입니다", 'utf8');
                    break;
            }
            break;
        case 'POST':
            console.log("post임");
        // switch(_url):
        //   case "/post":
        //     req.on('data', (data)=>{
        //       body = body + data
        //     });
        //     req.on('end', ()=>{
        //     })
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
