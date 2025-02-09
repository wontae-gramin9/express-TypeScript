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
  res
    .status(202)
    .header({ "X-Custom-Header": "foo", "X-Custom-Header-2": "bar" })
    .send(`Hello ${req.params.id}`);
});

// Top-Down으로 들어가기때문에, /:id에 의해 가려지게 된다
app.get("/health", (req, res) => {
  res.send("OK");
});
