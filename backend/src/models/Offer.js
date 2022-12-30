const { DataTypes } = require("sequelize");
const database = require("../database/database");

const Offer = database.define("offer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremnet: true,
    allowNull: false,
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  paymentStatusProvider: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: "orders",
      key: "id",
    },
  },
  sponsorId: {
    type: DataTypes.INTEGER,
    references: {
      model: "sponsors",
      key: "id",
    },
  },
});

module.exports = Offer;