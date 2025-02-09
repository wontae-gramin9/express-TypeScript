import { Router } from "express";
import { logger } from "../middlewares";

export const router = Router();

router.use(logger);

router.get("/", logger, logger, (req, res) => {
  res.send({
    message: "Get all calculations",
    data: [
      {
        id: 1,
        result: 1,
      },
      {
        id: 2,
        result: 2,
      },
    ],
  });
});

router.get("/:id", (req, res) => {
  res.send({
    message: "Get calculation by ID",
    id: req.params.id,
    result: 1,
  });
});
