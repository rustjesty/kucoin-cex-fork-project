import { Router } from 'express';
import { z } from 'zod';
import { authenticate, AuthenticatedRequest } from '../middleware/authenticate';
import { orderBookService } from '../services/orderBookService';

const router = Router();

router.use(authenticate);

const orderSchema = z.object({
  symbol: z.string().toUpperCase(),
  side: z.enum(['buy', 'sell']),
  type: z.enum(['limit', 'market']),
  price: z.number().positive().optional(),
  size: z.number().positive(),
});

router.post('/', (req: AuthenticatedRequest, res, next) => {
  try {
    const payload = orderSchema.parse(req.body);
    if (payload.type === 'limit' && !payload.price) {
      throw Object.assign(new Error('Limit orders require price'), { status: 400 });
    }
    const order = orderBookService.placeOrder(req.userId!, {
      symbol: payload.symbol,
      side: payload.side,
      type: payload.type,
      price: payload.price ?? 0,
      size: payload.size,
    });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
});

router.get('/', (req: AuthenticatedRequest, res, next) => {
  try {
    const orders = orderBookService.listOrders(req.userId!);
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

export const orderRouter = router;

