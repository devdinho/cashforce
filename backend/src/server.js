const express = require("express");
const cors = require("cors");
const router = require('./routes');
const database = require("./database/database");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(3000, async () => {
  await database.sync();
  console.log("Server running...");
});