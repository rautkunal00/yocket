require("dotenv").config({ override: true });
const express = require("express");
const app = express();
const port = process.env.PORT;

const indexRouter = require("./src/router/indexRouter");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log("server started at port: ", port);
});
