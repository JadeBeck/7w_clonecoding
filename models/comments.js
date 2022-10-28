'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init({
    commentsId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    // userName: {
    //   type: STRING
    // },
    goodsId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'Goods',
        key: 'goodsId',
      },
      onDelete: 'cascade',
    },
    commentImage: {
      allowNull: true,
      type: STRING
    },
    content: {
      allowNull: false,
      type: STRING
    },
    createdAt: {
      allowNull: false,
      type: DATE,
      defaultValue: DataTypes.Now
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
      defaultValue: DataTypes.Now
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};