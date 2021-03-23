const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Get request to homepage");
});

app.get("/fruits/banana", (req, res) => {
  const fruitDetails = {
    fruit: "banana",
    quantity: 1000,
    price: 10000,
  };
  res.send(fruitDetails);
});

const userName = ["Akash", "Rakib", "Sakib", "Parvej", "Pankaj"];

app.get("/users/:id", (req, res) => {
  const value = req.params.id;
  const name = userName[value];
  res.send({ value, name });
});

// post

app.post("/addUser", (req, res) => {
  const user = req.body;
  user.id = 01;

  res.send(user);
});

app.listen(3000, () => {
  console.log("Listening To Port 3000");
});
