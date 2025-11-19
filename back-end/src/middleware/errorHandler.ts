import { NextFunction, Request, Response } from 'express';

interface HttpError extends Error {
  status?: number;
  details?: unknown;
}

export const errorHandler = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = err.status ?? 500;
  res.status(status).json({
    message: err.message || 'Internal server error',
    details: err.details,
  });
};

