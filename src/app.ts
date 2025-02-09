import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello world.");
});
app.get("/:id", (req, res) => {
  res.send(`Hello ${req.params.id}`);
});
