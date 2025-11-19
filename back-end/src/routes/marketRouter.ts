import { Router } from 'express';
import { marketService } from '../services/marketService';

const router = Router();

router.get('/', (_req, res, next) => {
  try {
    const markets = marketService.listMarkets();
    res.json(markets);
  } catch (error) {
    next(error);
  }
});

router.get('/:symbol/orderbook', (req, res, next) => {
  try {
    const book = marketService.getOrderBook(req.params.symbol.toUpperCase());
    res.json(book);
  } catch (error) {
    next(error);
  }
});

export const marketRouter = router;

