const { DataTypes } = require("sequelize");
const database = require("../database/database");

const Cnpj = database.define("cnpj", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Cnpj;