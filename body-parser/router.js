// const express = require("express");
// const router = express.Router();
// const qs = require('qs');

// router.use(express.json())
// router.use(express.urlencoded({extended:false}));


// router.get('/', (req,res)=>{
//   res.send(
//   `<form action="/" method="post">
//       email : <input type="text" name="email" /><br/>
//       name : <input type="text" name="name" /> <br/>
//       password : <input type="text" name="password"> <br />
//       <input type="submit">
//   </form>
//   `)
// })

// router.post('/', (req,res)=>{
//   const body = '';
//   req.on('data', (data)=>{
//     body+=data;
//   })

//   req.on('end',()=>{
//     const post = qs.parse(body);
//     const name = body.name;
//     const email = body.email;

//     res.send(`Hi ${name}, your email is ${email}`)
//   })
//   // const body = req.body;
//   // const name = body.name;
//   // const email = body.email;

//   // res.send(`Hi ${name}, your email is ${email}`)
// })


// module.exports = router;