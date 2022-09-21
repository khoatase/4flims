require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;
const routes = require("./routes/index");

app.use(cors("*"));
app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(PORT + " is running");
});
