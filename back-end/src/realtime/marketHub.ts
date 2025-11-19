import { Server as HttpServer } from 'http';
import { WebSocketServer } from 'ws';
import { env } from '../config/env';
import { marketService } from '../services/marketService';

interface MarketTick {
  symbol: string;
  price: number;
  change24h: number;
  ts: number;
}

export const createMarketHub = (server: HttpServer) => {
  const wss = new WebSocketServer({ server, path: '/ws/markets' });

  const broadcast = (payload: MarketTick[]) => {
    const data = JSON.stringify({ type: 'tick', payload });
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  };

  const loop = () => {
    const markets = marketService.mutatePrices();
    const ticks: MarketTick[] = markets.map((mkt) => ({
      symbol: mkt.symbol,
      price: mkt.price,
      change24h: Number((Math.random() * 4 - 2).toFixed(2)),
      ts: Date.now(),
    }));
    broadcast(ticks);
    setTimeout(loop, env.wsHeartbeatMs);
  };

  loop();
};

