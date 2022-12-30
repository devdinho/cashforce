const { DataTypes } = require("sequelize");
const database = require("../database/database");

const Provider = database.define("provider", {
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
  tradingName: {
    type: DataTypes.STRING,
  },
  cashforceTax: {
    type: DataTypes.STRING,
  },
  responsibleName: {
    type: DataTypes.STRING,
  },
  responsibleEmail: {
    type: DataTypes.STRING,
  },
  responsiblePosition: {
    type: DataTypes.STRING,
  },
  responsiblePhone: {
    type: DataTypes.STRING,
  },
  responsibleMobile: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  postalCode: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  complement: {
    type: DataTypes.STRING,
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  bank: {
    type: DataTypes.STRING,
  },
  bankAgency: {
    type: DataTypes.STRING,
  },
  account: {
    type: DataTypes.STRING,
  },
  documents: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  situation: {
    type: DataTypes.STRING,
  },
  situationDate: {
    type: DataTypes.STRING,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    references: {
      model: "cnpjs",
      key: "id",
    },
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = Provider;