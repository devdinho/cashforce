const { DataTypes } = require("sequelize");
const database = require("../database");
const Buyer = require("./Buyer");
const Provider = require("./Provider");

const Order = database.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremnet: true,
    allowNull: false,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
    unique: true,
  },
  orderFileName: {
    type: DataTypes.STRING,
    unique: true,
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    unique: true,
  },
  emissionDate: {
    type: DataTypes.STRING,
  },
  pdfFile: {
    type: DataTypes.STRING,
  },
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nNf: {
    type: DataTypes.STRING,
  },
  CTE: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.STRING,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    references: {
      model: "cnpjs",
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
  buyerId: {
    type: DataTypes.INTEGER,
    references: {
      model: "buyers",
      key: "id",
    },
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
      model: "providers",
      key: "id",
    },
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: "0",
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: "0",
  },
  deliveryReceipt: {
    type: DataTypes.STRING,
  },
  cargoPackingList: {
    type: DataTypes.STRING,
  },
  deliveryCtrc: {
    type: DataTypes.STRING,
  },
});

Order.belongsTo(Buyer);
Order.belongsTo(Provider);
Buyer.hasMany(Order);
Provider.hasMany(Order);

module.exports = Order;