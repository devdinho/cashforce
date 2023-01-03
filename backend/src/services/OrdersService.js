const Order = require("../models/Order");
const Buyer = require("../models/Buyer");
const Provider = require("../models/Provider");

const getOrders = async () => {
  try {
    const orders = await Order.findAll({
      attributes: ["orderNumber", "emissionDate", "value", "orderStatusBuyer"],
      include: [
        { model: Buyer, attributes: ["name"] },
        { model: Provider, attributes: ["name"] },
      ],
    });

    return orders;
  } catch(err) {
    console.log(err);
    throw { message: "Something went wrong" };
  }
}

module.exports = {
  getOrders,
};