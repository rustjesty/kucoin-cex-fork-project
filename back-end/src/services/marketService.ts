import { OrderBookSnapshot } from '../types';

const markets = [
  { symbol: 'BTC-USDT', base: 'BTC', quote: 'USDT', price: 68250 },
  { symbol: 'ETH-USDT', base: 'ETH', quote: 'USDT', price: 3650 },
  { symbol: 'SOL-USDT', base: 'SOL', quote: 'USDT', price: 145 },
];

const snapshots = new Map<string, OrderBookSnapshot>();

const generateBook = (symbol: string, price: number): OrderBookSnapshot => {
  const spread = price * 0.001;
  const now = new Date().toISOString();
  const bids: [number, number][] = [];
  const asks: [number, number][] = [];

  for (let i = 0; i < 5; i += 1) {
    bids.push([
      Number((price - spread - i * spread * 0.2).toFixed(2)),
      Number((Math.random() * 2).toFixed(3)),
    ]);
    asks.push([
      Number((price + spread + i * spread * 0.2).toFixed(2)),
      Number((Math.random() * 2).toFixed(3)),
    ]);
  }

  return {
    symbol,
    bids,
    asks,
    lastPrice: price,
    lastUpdated: now,
  };
};

const seedBooks = () => {
  markets.forEach((mkt) => snapshots.set(mkt.symbol, generateBook(mkt.symbol, mkt.price)));
};

seedBooks();

export const marketService = {
  listMarkets() {
    return markets.map((mkt) => ({
      ...mkt,
      change24h: Number((Math.random() * 4 - 2).toFixed(2)),
      volume24h: Number((Math.random() * 5000).toFixed(2)),
    }));
  },

  getOrderBook(symbol: string) {
    if (!snapshots.has(symbol)) {
      throw Object.assign(new Error('Unknown symbol'), { status: 404 });
    }
    return snapshots.get(symbol)!;
  },

  mutatePrices() {
    markets.forEach((mkt) => {
      const drift = (Math.random() - 0.5) * (mkt.price * 0.002);
      mkt.price = Number((mkt.price + drift).toFixed(2));
      snapshots.set(mkt.symbol, generateBook(mkt.symbol, mkt.price));
    });
    return markets;
  },
};

