const express = require('express');
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');
const app = express();

app.use(express.json({
  limit: '50mb' //최대 50메가
})); //클라이언트 요청 body를 json으로 파싱 처리

app.listen(5050, ()=>{
  // 5050번 포트로 웹 서버 실행
  console.log("Server started. port 5050");
});

app.use('/customer', customerRoute);
// customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use('/product', productRoute);
// product 라우트를 추가하고 기본경로로 /product 사용





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