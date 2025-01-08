const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      }, 
    },  {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate:'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, {foreignKey:'commenter', targetKey:'id'});
  }
  // comments 테이블의 로우를 불러올 때 연결된 users 테이블의 로우를 가져옴. 다른 모델의 정보가 들어가는 테이블에 belongsTo를 사용. 
  // hasMany 메서드에서는 sourceKey 속성에 id를 넣고 belongsTo 메서드에서는 targetKey 속성에 id를 넣음. sourceKey의 id와 targetKey의 id 모두 User 모델의 id임.
};
