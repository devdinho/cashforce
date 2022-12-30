const { Router } = require("express");
const controller = require("../controllers/getOrders");

const router = Router();

router.get("/", controller.getOrders);

module.exports = router;