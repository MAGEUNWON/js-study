const express = require('express');
const { dirname } = require('path');
const myFaivoriteMovieRoute = require('./routes/myFaivoriteMovie');
const myInfoRoute = require('./routes/myInfo');
const morgan = require('morgan'); //미들웨어 연결
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');



dotenv.config();
const app = express();
app.set('port', process.env.PORT||5050);
// console.dir(dotenv);


app.use(morgan('dev'));

// *app.use((req,res,next)=>{
//   morgan('dev')(req,res,next);
// })
//  이런식으로 미들웨어 안에 미들웨어를 넣어서 쓸 수 있음.
// 이 패턴은 기존 미들웨어의 기능을 확장할 수 있음. 조건문에 따라 다른 미들웨어 적용할 수 있는 등. 

app.use('/', express.static(path.join(__dirname, 'public')));

// app.use('/', express.static(path.join(__dirname, 'public')));
// app.get('/', (req,res)=>{
//   res.sendFile(path.join(__dirname+ '/public/index.html'));
// })

app.use(express.json());// 클라이언트에서 application/json 데이터를 보냈을 때 파싱해서 body 객체에 넣어줌
app.use(express.urlencoded({extended: false}));//클라이언트에서  application/x-www-form-urlencoded 데이터를 보냈을 때 파싱해서 body 객체에 넣어줌.
// url-encoded는 주소형식으로 데이터를 보내는 방식. 폼 전송은 URL-encoded 방식을 주로 사용. 
// urlencoded 메서드를 보면 {extended:false} 라는 옵션이 들어있는데 이 옵션이 false면 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석, true면 qs 모듈(npm 패키지 중 하나)을 사용하여 쿼리스트링을 해석. qs는 querystring의 기능을 확장한 모듈. 가능한 extended:true로 두는 것이 좋음.

app.use(cookieParser(process.env.COOKIE_SECRET)); //암호화하는 데 쓰이는 키
app.use(session({
  resave:false, //세션을 언제나 저장할지 설정함. 
  saveUninitialized:false, //세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
  secret: process.env.COOKIE_SECRET,
  cookie:{ //세션 쿠키 설정(세션 관리 시 세션 쿠키를 사용할 수 없도록 함)
    httpOnly: true, //자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
    secure: false
  },
  name:'session-cookie',//세션 쿠키명 디폴트값은 connect.sid이지만 다른 이름을 줄수도 있음. 
}));

// *app.use(
//   morgan('dev'),
//   express.static('/', path.join(__dirname, 'public')),
//   express.json(),
//   express.urlencoded({extended: false}),
//   cookieParser(process.env.COOKIE_SECRET)
// );
// * 이런식으로 하나로 묶어 줄 수 있음. 위 미들웨어는 내부적으로 next 호출하고 있으므로 연달아 쓸 수 있음. next를 호출하지 않는 미들웨어는 res.send나 res.sendFile 등의 메서드로 응답 보내야 함. express.static과 같은 미들웨어는 정적 파일을 제공할 때 next 대신 res.sendFile 메서드로 응답해야 함. 따라서 정적파일을 제공하는 경우 express.json, express.urlencoded, cookieParser 미들웨어는 실행되지 않음. 


app.use((req, res, next)=>{
  
  console.log('모든 요청에 다 실행됩니다.');
  next();
});


app.get('/', (req, res, next)=>{
  console.log('GET/요청에서만 실행됩니다.');
  next();
}, (req, res)=>{
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

// app.post((req, res, next)=>{
//   res.redirect('/myFaivoriteMovie');
// })


app.use((err, req, res, next)=>{
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=>{
  // 5050번 포트로 웹 서버 실행
  console.log("Server started. port 5050");
});

app.get('/example', (req, res, next)=>{
  next(new Error('에러 발생'));
})
// next 안에 인수를 넣으면 바로 에러처리 미들웨어로 이동. 이 때 인수는 에러처리 미들웨어의 매개변수가 됨. 

app.use((err, req, res, next)=>{
  console.error(err);
  res.status(500).json({statusCode:res.statusCode, errMessage:err.message});
});

// app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.json({
  limit: '50mb' //최대 50메가
})); //클라이언트 요청 body를 json으로 파싱 처리




app.use('/myFaivoriteMovie', myFaivoriteMovieRoute);
// customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use('/myInfo', myInfoRoute);
// product 라우트를 추가하고 기본경로로 /product 사용

// const server = http.createServer((req,res)=>{
//   const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
//   switch(path){
//     case "":
//     serveStaticFile(res, '/index.html', "text/html");
//     break;

//     case '/public/js/jsScript/Search.js':
//     serveStaticFile(res, '/public/js/jsScript/Search.js', 'script/js');
//     break;



//   }
// })

// const require =require('./public/js/jsScript/Search')
// 라우트 메서드
// app.get("/customer",(req,res)=>{
//   res.send("get 요청에 대한 응답");
// });
// // 클라이언트에서 HTTP 요청 메소드 GET 방식으로 'host:5050/customer'를 호출 했을 때

// app.post("/customer", (req,res)=>{
//   res.send("post 요청에 대한 응답");
// });
// // 클라이언트에서 HTTP 요청 메소드 POST 방식으로 'host:5050/customer'를 호출 했을 때

// app.all("/customer",(req,res)=>{
//   res.send("모든 요청에 대한 응답");
// });
// 클라이언트에서 요청한 HTTP 요청 메소드 종류에 상관 없이 'host:5050/cumstomer'를 호출했을 때 


// const port = 5050;

// app.get('/', (req,res)=>{
//   res.send('Hello world');
// });

// app.listen(port, ()=>{
//   console.log(`서버가 실행됩니다. http://localhost:${port}`);
// });