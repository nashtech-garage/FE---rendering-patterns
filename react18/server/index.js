const express = require("express");
const path = require("path");
const app = express();
const { render } = require("./render");

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
  render(req, res);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});