const express = require('express');
const router = express.Router();
// const customer = require('../public/js/views/customer.js');

router
  .get("/", (req,res)=>{
    // HTTP 메소드 GET 요청에 대한 조회 처리
    res.send("내 정보");
  })
  .post("/insert",(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 저장 처리
    res.send("신규 상품 추가");
  })
  .put("/update",(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 수정 처리
    res.send("상품 정보 수정");
  })
  .delete("/delete",(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 삭제 처리
    res.send("상품 정보 삭제");
  })

module.exports = router;
// 모듈 객체 내보내 주는 코드