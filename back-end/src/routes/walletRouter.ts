import { Router } from 'express';
import { z } from 'zod';
import { authenticate, AuthenticatedRequest } from '../middleware/authenticate';
import { walletService } from '../services/walletService';

const router = Router();

router.use(authenticate);

const transferSchema = z.object({
  currency: z.string().toUpperCase(),
  amount: z.number().positive(),
});

router.post('/deposit', (req: AuthenticatedRequest, res, next) => {
  try {
    const payload = transferSchema.parse(req.body);
    const balance = walletService.deposit(req.userId!, payload.currency, payload.amount);
    res.json(balance);
  } catch (error) {
    next(error);
  }
});

router.post('/withdraw', (req: AuthenticatedRequest, res, next) => {
  try {
    const payload = transferSchema.parse(req.body);
    const balance = walletService.withdraw(req.userId!, payload.currency, payload.amount);
    res.json(balance);
  } catch (error) {
    next(error);
  }
});

export const walletRouter = router;

