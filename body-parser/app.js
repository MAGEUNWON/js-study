const { json } = require("express");
const express = require("express");
const { restart } = require("nodemon");
const app = express();
const port = 3000;
const path = require('path');
const QueryString = require("qs");
const qs = require('qs');
// compression-webpack-plugin과 같은 일을 함. 
// compression 미들웨어는 Gzip 압축을 지원하는 미들웨어
const compression = require('compression')
const expressStaticGzip = require('express-static-gzip');
// const router = require('./router.js');


// app.use(router)

// app.use(compression());

// app.use("/", express.static(path.join(__dirname + 'public')));
app.use('/', express.static(__dirname + '/public')); 
// 얘가 res.send(hi)보다 위에 있으면 hi가 안먹힘. 
// 대신 index.html 내용이 나옴. 
// res.send(hi)보다 밑에 있으면 hi가 나오고 index.html이 안나옴.
// 얘가 위에 있고 app.use('/static, epxrpee~~')면 res.send안의 내용이 다운로드 됨. 
// app.use('/', express.static(path.join(__dirname + '/public'))); 
// path.join이 앞에 있어야 css/test.css 이런식으로 정적파일들의 경로가 지정됨. 

// router.js로 옮겨서 app.js를 줄여 줌. 

// app.use('/', expressStaticGzip('/index.html', '/js/test.js'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res)=>{
  // res.set({
  //   'Content-Type':'script/js'
  // })
  res.sendFile(__dirname +'/public/index.html')
});

// app.get('/', (req, res)=>{
//   res.send('/index.html', 'text/html')
// }) .get('/js/test.js', (req,res)=>{
//   res.send('/js/test.js', 'script/js')
// }) .get('/css/test.css', (req,res)=>{
//   res.send('/css/test.css', 'text/css')
// });

// const url = require('url');
// const urlparse = url.parse('http://localhost:3000/js/test.js')
// console.log(urlparse);

// const qsurl = qs.parse(urlparse.query)
// // console.log(qsurl);
// const strquery = qs.stringify(qsurl);
// console.log(strquery);

// app.route('/js/test.js')
//   .get((req, res)=>{
//     res.send('/js/test.js', 'script/js');
//   })

// app.get('/', (req, res)=>{
//   res.set({
//     'Content-Type': 'text/html'
//   });
//   res.type('.js');
//   res.send('/js/test.js', 'script/js');
// })

// app.post('/js/test.js', (req,res)=>{
//   console.log(req.body);
//   res.send(req.body);
// })




// .js/test.js

// app.get('/', (req, res)=>{
//   res.send(`
//     <form action="/" method="post">
//         email : <input type="text" name="email" /> <br />
//         name : <input type="text" name="name" /> <br />
//         password : <input type="text" name="password" /> <br />
//         <input type="submit">
//     </form>
//     `)
// })

// app.post('/', (req,res)=>{
//   const body = req.body;
//   const name = body.name;
//   const email = body.email;

//   res.send(`hi ${name}, your email is ${email}`)
// })

app.listen(port, ()=>{
  console.log("서버 실행 완료");
});