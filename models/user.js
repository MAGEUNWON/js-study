const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
  // User 모델 만들고 모듈로 exports 함. User 모델은 Sequelize.Model을 확장한 클래스로 선언. 모델은 크게 static init메서드와 static associate 메서드로 나뉨. init 메서드에서는 테이블에 대한 설정, associate 메서드는 다른 모델과의 관계를 적음. 
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique:true,
      },
      age: {
        type :Sequelize.INTEGER.UNSIGNED,
        allowNull :false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      comment:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      // 여기까지 init 메서드의 첫번째 인수, 테이블 컬럼에 대한 설정
    }, {
      sequelize,
      // static init 메서드의 매개변수와 연결되는 옵션, db.sequelize 객체를 넣어야 함. 나중에 model/index.js에서 연결
      timestamps: false,
      // 이 속성값이 true이면 시퀄라이즈는 createdAt과 updatedAt 컬럼을 추가. 각각 로우가 생성, 수정 될 때의 시간이 자동으로 입력. 하지만 나는 직접 created_at 컬럼 만들었으므로 false함
      underscored: false,
      // 시퀄라이즈는 기본적으로 테이블명과 컬럼명을 캐멀 케이스(createdAt)로 만듬. 이를 스케이크 케이스(created_at)로 바꾸는 옵션.
      modelName :'User',
      // 모델 이름 설정. 노드 프로젝트에서 사용. 기본적으로 모델이름은 단수형으로 사용
      tableName: 'users',
      // 실제 데이터베이스의 테이블 이름, 기본적으로 복수형으로 만듬. 
      paranoid: false,
      // true로 설정하면 deletedAt이라는 컬럼이 생김. 로우를 삭제할 때 완전히 지워지지 않고 deletedAt에 지운 시각이 기록. 로우 조회하는 명령 내리면 deletedAt 값이 null 로우(삭제되지 않은)를 조회. 나중에 로우를 복원하기 위해 이렇게 함. 로우 복원해야 하는 상황이 생길 것 같다면 true로 미리 설정하기.  
      charset: 'utf8',
      collate:'utf8_general_ci',
      //  위 두개는 저렇게 설정해야 한글이 입력. 이모티콘까지 쓰고 싶다면 utf8mb4: utf8mb4_general_ci 입력하면 됨. 
    });
    // 여긴 init 메서드의 두번째 인수, 테이블 자체에 대한 설정
  }
  static associate(db) {
    db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey:'id'});
  }
  // hasMany는 1:N 관계를 표현하는 메서드. users 테이블의 로우 하나를 불러올 때 연결된 comments 테이블의 로우들도 같이 불러올 수 있음. 반대는 belongsTo 메서드. comments 테이블의 로우를 불러올 때 연결 된 users 테이블의 로우를 가져 옴. 다른 모델의 정보가 들어가는 테이블에 belongsTo 를 사용. 
  // hasMany 메서드에서는 sourceKey 속성에 id를 넣고 belongsTo 메서드에서는 targetKey 속성에 id를 넣음. sourceKey의 id와 targetKey의 id 모두 User 모델의 id임.
};