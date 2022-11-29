"use strict";
exports.__esModule = true;
var fs = require("fs");
// import * as fs from 'fs'; 앞에 * 붙여주면 fs의 모든 것을 다 쓰겠다는 뜻. 이렇게 써줘야 하나씩 설정 안하고 다 쓸 수 있음.
var http = require("http");
var server = http.createServer(function (req, res) {
    var _url = req.url;
    var readfiles = function (path) {
        return fs.readFileSync("".concat(path, ".txt"), 'utf8');
    };
    var data = "\n  ".concat(readfiles('header'), "\n  ").concat(readfiles('main'), "\n  ").concat(readfiles('footer'), "\n  ");
    var input = "\n    ".concat(readfiles('head'), "\n  ");
    if (req.method === 'GET') {
        // switch (_url === "/") {
        //   case _url === "/":
        //     console.log("/라우터")
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     fs.writeFileSync('body.txt',data,'utf8')
        //     res.end(`
        //       ${readfiles('head')}
        //       ${readfiles('body')}
        //     `)
        //     break;
        //   case _url === "/a":
        //     console.log("a 라우터")
        //     // res.writeHead(200,{'Content-Type':'text/html'})
        //     // res.write()
        //     // res.end()
        // }
        if (_url === "/") {
            console.log("/라우터");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.writeFileSync('body.txt', data, 'utf8');
            res.end("\n        ".concat(readfiles('head'), "\n        ").concat(readfiles('body'), "\n      "));
        }
        else if (_url === "/a") {
            console.log("a라우터");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.writeFileSync('body.txt', "a라우터입니다", 'utf8');
            res.end("\n      ".concat(readfiles('head'), "\n      ").concat(readfiles('body'), "\n      "));
        }
        else if (_url === "/b") {
            console.log("b라우터");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.writeFileSync('body.txt', "b라우터입니다", 'utf8');
            res.end("\n      ".concat(readfiles('head'), "\n      ").concat(readfiles('body'), "\n      "));
        }
        else if (_url === "/c") {
            console.log("c라우터");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.writeFileSync('body.txt', "c라우터입니다", 'utf8');
            res.end("\n      ".concat(readfiles('head'), "\n      ").concat(readfiles('body'), "\n      "));
        }
        else if (_url === "/d") {
            console.log("d라우터");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.writeFileSync('body.txt', "d라우터입니다", 'utf8');
            res.end("\n      ".concat(readfiles('head'), "\n      ").concat(readfiles('body'), "\n      "));
        }
    }
});
server.listen(5000, function () {
    console.log('서버가 작동되고 있습니다!');
});
