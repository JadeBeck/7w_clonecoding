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
      type: DataTypes.INTEGER
    },
    goodsName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    goodsImage: {
      type: DataTypes.STRING,
<<<<<<< HEAD
=======
      allowNull: false
    },
    delivery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING,
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'Goods',
  });
  return Goods;
};