import { Router } from 'express';
import { authenticate, AuthenticatedRequest } from '../middleware/authenticate';
import { accountService } from '../services/accountService';

const router = Router();

router.use(authenticate);

router.get('/summary', (req: AuthenticatedRequest, res, next) => {
  try {
    const summary = accountService.getSummary(req.userId!);
    res.json(summary);
  } catch (error) {
    next(error);
  }
});

router.get('/ledger', (req: AuthenticatedRequest, res, next) => {
  try {
    const entries = accountService.getLedger(req.userId!);
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

export const accountRouter = router;

