import express from "express";
import { calculatorRouter, healthRouter } from "./routes";
import { addTimestamp, errorHandler, logger } from "./middlewares";

const app = express();
const port = 3000;

// [Middleware] express는 top-down이기때문에 middleware를 전부 router 상단에,
app.use(addTimestamp);
// logger가 addTimestamp를 사용하기에 addTimestamp가 먼저 나와야 한다
app.use(logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.get("/", (req, res) => {
  res.send("Hello world.");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
