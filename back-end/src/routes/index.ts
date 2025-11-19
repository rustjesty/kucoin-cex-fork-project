import { Express } from 'express';
import { authRouter } from './authRouter';
import { accountRouter } from './accountRouter';
import { marketRouter } from './marketRouter';
import { orderRouter } from './orderRouter';
import { walletRouter } from './walletRouter';

export const registerRoutes = (app: Express) => {
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', ts: Date.now() });
  });

  app.use('/auth', authRouter);
  app.use('/account', accountRouter);
  app.use('/wallet', walletRouter);
  app.use('/orders', orderRouter);
  app.use('/markets', marketRouter);
};

