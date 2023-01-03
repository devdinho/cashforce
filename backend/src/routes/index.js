const { Router } = require("express");
const OrdersController = require("../controllers/OrdersController");

const router = Router();

router.get("/", OrdersController.getOrders);

module.exports = router;