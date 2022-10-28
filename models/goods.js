'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goods.init({
    goodsId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    goodsName: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    goodsImage: {
      type: STRING,
      allowNull: false
    },
    category: {
      type: STRING,
      allowNull: false
    },
    price: {
      type: INTEGER,
      allowNull: false
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
    modelName: 'Goods',
  });
  return Goods;
};