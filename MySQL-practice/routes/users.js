const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.route('/')
  .get(async (req, res, next)=>{
    try{
      const users = await User.findAll();
      res.json(users);
    } catch(err){
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next)=>{
    try{
      const user = await User.create({
        name : req.body.name,
        age: req.body.age,
        married:req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err){
      console.error(err);
      next(err);
    }
  });

  router.get('/:id/comments', async (req, res, next)=>{
     // req.params.id로 값을 가져 올 수 있음. /users/1/comments라면 사용자 id 1인 댓글 불러오는 것.
    try {
      const comments = await Comment.findAll({
        include: {
          model :User,
          where: {id:req.params.id},
        },
        // include로 넣어준 사용자 정보. 작성자의 이름이나 나이 등을 조회 할 수 있음. 
      });
      console.log(comments);
      res.json(comments);
    } catch(err){
      console.error(err);
      next(err);
    }
  });

  module.exports = router;