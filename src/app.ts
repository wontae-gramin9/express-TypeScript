import express from "express";
import { calculatorRouter, healthRouter } from "./routes";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.get("/", (req, res) => {
  res.send("Hello world.");
});
