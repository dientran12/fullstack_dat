const express = require("express");
const router = require("./router/router.js");
const cors = require("cors");

const app = express();
const port = 8080;
app.use(express.json());
const mongoose = require("mongoose");

// create the connection to database
mongoose
  .connect(
    "mongodb+srv://dapcuc1133:k0canghi@cluster0.tg4cltt.mongodb.net/test"
  )
  .then(() => {
    console.log("connection");
  })
  .catch((eror) => {
    console.log("error");
  });

app.use(cors());
app.use("/clothes", router, (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
