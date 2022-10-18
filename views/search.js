const express = require('express');
const router = express.Router();

router
  .get('/', (req,res)=>{
    // HTTP 메소드 GET 요청에 대한 조회 처리
    res.send("검색화면");
  })
  .post('/insert',(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 저장 처리
    res.send("신규 고객 추가");
  })
  .put('/update',(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 수정 처리
    res.send("고객 정보 수정");
  })
  .delete('/delete',(req,res)=>{
    // HTTP 메소드 GET 요청에 대한 삭제 처리
    res.send("고객 정보 삭제");
  });

module.exports = router;
// 모듈 객체 내보내주는 코드