import crypto from 'crypto';
import { Order, OrderBookSnapshot, OrderInput } from '../types';
import { marketService } from './marketService';

const orders = new Map<string, Order[]>(); // userId -> orders

const pushOrder = (order: Order) => {
  const existing = orders.get(order.userId) ?? [];
  existing.push(order);
  orders.set(order.userId, existing);
  return order;
};

const fillMarketOrder = (order: Order): Order => {
  const book = marketService.getOrderBook(order.symbol);
  const best =
    order.side === 'buy' ? book.asks[0]?.[0] ?? order.price : book.bids[0]?.[0] ?? order.price;
  order.price = best;
  order.status = 'filled';
  order.filledSize = order.size;
  return order;
};

export const orderBookService = {
  placeOrder(userId: string, input: OrderInput): Order {
    const bookExists = (() => {
      try {
        marketService.getOrderBook(input.symbol);
        return true;
      } catch {
        return false;
      }
    })();
    if (!bookExists) {
      throw Object.assign(new Error('Market not found'), { status: 404 });
    }

    const order: Order = {
      ...input,
      id: crypto.randomUUID(),
      status: input.type === 'market' ? 'filled' : 'open',
      filledSize: input.type === 'market' ? input.size : 0,
      createdAt: new Date().toISOString(),
      userId,
    };

    if (input.type === 'market') {
      fillMarketOrder(order);
    }

    return pushOrder(order);
  },

  listOrders(userId: string) {
    return (orders.get(userId) ?? []).slice(-50);
  },

  getBook(symbol: string): OrderBookSnapshot {
    return marketService.getOrderBook(symbol);
  },
};

