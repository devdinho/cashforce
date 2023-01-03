const OrdersService = require("../services/OrdersService");

const getOrders = async (_req, res) => {
  try {
    const orders = await OrdersService.getOrders();
    return res.status(200).json(orders);
  } catch(err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getOrders,
};