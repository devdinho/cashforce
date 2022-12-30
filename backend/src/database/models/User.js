const { DataTypes } = require("sequelize");
const database = require("../database");

const User = database.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremnet: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  mobile: {
    type: DataTypes.STRING,
  },
  departament: {
    type: DataTypes.STRING,
  },
  verificationCode: {
    type: DataTypes.STRING,
  },
  emailChecked: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  cashforceAdm: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
});

module.exports = User;