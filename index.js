const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Get & Post to Homepage");
});

app.listen(3000, () => {
  console.log("Listening To Port 3000");
});
