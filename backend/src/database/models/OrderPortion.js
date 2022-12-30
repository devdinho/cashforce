const { DataTypes } = require("sequelize");
const database = require("../database");

const OrderPortion = database.define("orderportion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremnet: true,
    allowNull: false,
  },
  nDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dVenc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableToMarket: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
  },
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: "orders",
      key: "id",
    },
  },
});

module.exports = OrderPortion;