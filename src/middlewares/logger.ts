import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `
    Timestamp: ${req.timestamp}
    Method: ${req.method} \n IP: ${req.ip} \n Path: ${req.originalUrl}`
  );
  // [Middleware] req정보를 알려주는 middleware
  // at the end of any middleware, next function has to be executed
  // Otherwise, the request will stop here and never return. never a response.
  next();
}
