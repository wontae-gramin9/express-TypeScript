import { Request, Router } from "express";

export const router = Router();

router.get("/", (req: Request, res) => {
  res.send({
    message: "Get all calculations",
    timestamp: req.timestamp,
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

router.get("/:id", (req: Request, res) => {
  res.send({
    timestamp: req.timestamp,
    message: "Get calculation by ID",
    id: req.params.id,
    result: 1,
  });
});
