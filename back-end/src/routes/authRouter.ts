import { Router } from 'express';
import { z } from 'zod';
import { authService } from '../services/authService';
import { authenticate, AuthenticatedRequest } from '../middleware/authenticate';

const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  nickname: z.string().optional(),
});

router.post('/register', (req, res, next) => {
  try {
    const payload = registerSchema.parse(req.body);
    const result = authService.register(payload);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/login', (req, res, next) => {
  try {
    const payload = registerSchema.pick({ email: true, password: true }).parse(req.body);
    const result = authService.login(payload);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/me', authenticate, (req: AuthenticatedRequest, res, next) => {
  try {
    const profile = authService.getProfile(req.userId!);
    res.json(profile);
  } catch (error) {
    next(error);
  }
});

export const authRouter = router;

