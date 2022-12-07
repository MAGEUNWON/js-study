
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development'; // 개발할 땐 develpment 배포 할 땐 production
const config = require('../config/config')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;
// db라는 객체에 User와 Comment 모델을 담아 둠. db객체를 require 하여 User와 Comment 모델에 접근할 수 있음. 

User.init(sequelize);
Comment.init(sequelize);
// User.init 와 Comment.init은 각각 모델의 static.init 메서드를 호출하는 것. init이 실행되어야 테이블이 모델로 연결됨. 

User.associate(db);
Comment.associate(db);
// 다른 테이블과의 관계를 연결하는 associate 메서드도 미리 실행.

module.exports = db;

