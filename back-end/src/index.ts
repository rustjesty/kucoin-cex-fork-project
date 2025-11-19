import http from 'http';
import express from 'express';
import cors from 'cors';

import { env } from './config/env';
import { registerRoutes } from './routes';
import { errorHandler } from './middleware/errorHandler';
import { createMarketHub } from './realtime/marketHub';

const app = express();

app.use(cors());
app.use(express.json());

registerRoutes(app);
app.use(errorHandler);

const server = http.createServer(app);

createMarketHub(server);

server.listen(env.port, () => {
  console.log(`CEX backend listening on http://localhost:${env.port}`);
});

