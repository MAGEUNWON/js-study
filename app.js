const express = require("express");
const app = express();
const port = 3000;
const router = require('./router.js');

app.use(router)

app.use('/static', express.static(__dirname + '/public'));

// router.js로 옮겨서 app.js를 줄여 줌. 
// app.use(express.json())
// app.use(express.urlencoded({extended:false}));

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