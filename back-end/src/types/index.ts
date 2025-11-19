export interface User {
  id: string;
  email: string;
  passwordHash: string;
  nickname: string;
  createdAt: string;
}

export interface Balance {
  currency: string;
  available: number;
  hold: number;
}

export interface AccountSummary {
  balances: Balance[];
  pnl24h: number;
  marginLevel: number;
}

export interface OrderInput {
  symbol: string;
  side: 'buy' | 'sell';
  price: number;
  size: number;
  type: 'limit' | 'market';
}

export interface Order extends OrderInput {
  id: string;
  status: 'open' | 'filled' | 'cancelled';
  filledSize: number;
  createdAt: string;
  userId: string;
}

export interface OrderBookSnapshot {
  symbol: string;
  bids: [number, number][];
  asks: [number, number][];
  lastPrice: number;
  lastUpdated: string;
}

