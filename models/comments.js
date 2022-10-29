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
      type: DataTypes.INTEGER
    },
<<<<<<< HEAD
    id: {
=======
    userId: {
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'userId',
      },
      onDelete: 'cascade',
    },
    goodsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Goods',
        key: 'goodsId',
      },
      onDelete: 'cascade',
    },
    commentImage: {
      allowNull: true,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
<<<<<<< HEAD
      // defaultValue: DataTypes.Now
=======
      defaultValue: DataTypes.Now
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
<<<<<<< HEAD
      // defaultValue: DataTypes.Now
=======
      defaultValue: DataTypes.Now
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};