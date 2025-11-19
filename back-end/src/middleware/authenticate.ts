import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/authService';

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  const token = header.slice(7);
  const userId = authService.verifyToken(token);

  if (!userId) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  req.userId = userId;
  next();
};

