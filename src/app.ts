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
  // Requset information
  // Query is a key-value object, hence serialize
  console.log(`Query parameter: ${JSON.stringify(req.query)}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  console.log(`Method: ${req.method}`);
  res.send(`Hello ${req.params.id}`);
});
