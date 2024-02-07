import express, { Request, Response, NextFunction } from "express";

import { BadRequest, Unauthorized, Forbidden, NotFound } from "./error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BadRequest || err instanceof Unauthorized || err instanceof Forbidden || err instanceof NotFound) {
    res.status(err.statusCode).json({ description: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


