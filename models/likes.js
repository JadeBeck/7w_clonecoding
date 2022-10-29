'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Likes.init({
    likesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id: {
=======
      primaryKey: true
    },
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
    modelName: 'Likes',
  });
  return Likes;
};