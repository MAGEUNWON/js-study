const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const {sequelize} = require('./models');
// ./models는 require('./models/index.js')와 같음. 폴더 내의 index.js 파일은 require 시 이름을 생략할 수 있음. 


const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');



const app = express();
app.set('port', process.env.PORT||3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch:true,
});

sequelize.sync({force:false}) 
// db.sequlize를 불러와서 sync 메서드를 사용해 서버 실행 시 MySQL과 연동 되록 함. 
//force:flase을 true로 설정하면 서버 실행시마다 테이블 재생성함. 테이블을 잘못 만들 경우에 true로 설정하면 됨.
  .then(()=>{
    console.log('데이터베이스 연결 성공');
  })
  .catch((err)=>{
    console.error(err);
  });

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/comments', commentsRouter);

  app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err :{};
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(app.get('port'), ()=>{
    console.log('서버 연결 성공 http://localhost:3001');
  });