'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Users.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
<<<<<<< HEAD
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
=======
      primaryKey: true
    },
    loginId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
<<<<<<< HEAD
      type: DataTypes.DATE,
      // defaultValue: DataTypes.Now
=======
      defaultValue: DataTypes.Now
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
<<<<<<< HEAD
      type: DataTypes.DATE,
      // defaultValue: DataTypes.Now
=======
      defaultValue: DataTypes.Now
>>>>>>> 7f2de08f73c991a8c5d7d198458362feac96666f
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};