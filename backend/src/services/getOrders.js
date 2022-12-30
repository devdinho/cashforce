const Order = require("../database/models/Order");
const Buyer = require("../database/models/Buyer");
const Provider = require("../database/models/Provider");

const getOrders = async () => {
  try {
    const orders = await Order.findAll({
      attributes: ["orderNumber", "emissionDate", "value"],
      include: [
        { model: Buyer, attributes: ["name"] },
        { model: Provider, attributes: ["name"] },
      ],
    });

    return orders;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  getOrders,
};