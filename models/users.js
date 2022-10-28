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
      // define association here
    }
  }
  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    userId: {
      type: STRING
    },
    userName: {
      type: STRING
    },
    password: {
      type: STRING
    },
    address: {
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
    modelName: 'Users',
  });
  return Users;
};