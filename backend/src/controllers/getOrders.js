const service = require("../services/getOrders");

const getOrders = async (_req, res) => {
  const orders = await service.getOrders();
  return res.status(200).json(orders);
};

module.exports = {
  getOrders,
};