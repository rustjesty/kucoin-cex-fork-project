import crypto from 'crypto';
import { AccountSummary, Balance } from '../types';

interface LedgerEntry {
  id: string;
  userId: string;
  currency: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'trade';
  createdAt: string;
  note?: string;
}

const balances = new Map<string, Balance[]>(); // userId -> balances
const ledger: LedgerEntry[] = [];

const ensureBalance = (userId: string, currency: string) => {
  const userBalances = balances.get(userId) ?? [];
  let entry = userBalances.find((b) => b.currency === currency);
  if (!entry) {
    entry = { currency, available: 0, hold: 0 };
    userBalances.push(entry);
  }
  balances.set(userId, userBalances);
  return entry;
};

export const accountService = {
  credit(userId: string, currency: string, amount: number, note?: string) {
    const balance = ensureBalance(userId, currency);
    balance.available += amount;
    ledger.push({
      id: crypto.randomUUID(),
      userId,
      currency,
      amount,
      type: 'deposit',
      createdAt: new Date().toISOString(),
      note,
    });
    return balance;
  },

  debit(userId: string, currency: string, amount: number, note?: string) {
    const balance = ensureBalance(userId, currency);
    if (balance.available < amount) {
      throw Object.assign(new Error('Insufficient balance'), { status: 400 });
    }
    balance.available -= amount;
    ledger.push({
      id: crypto.randomUUID(),
      userId,
      currency,
      amount: -amount,
      type: 'withdrawal',
      createdAt: new Date().toISOString(),
      note,
    });
    return balance;
  },

  getSummary(userId: string): AccountSummary {
    const userBalances = balances.get(userId) ?? [
      { currency: 'USDT', available: 1000, hold: 0 },
      { currency: 'BTC', available: 0.05, hold: 0 },
    ];
    balances.set(userId, userBalances);

    const pnl24h = Number(
      (Math.sin(Date.now() / 1000 / 60) * 100).toFixed(2),
    );

    return {
      balances: userBalances,
      pnl24h,
      marginLevel: 1.7,
    };
  },

  getLedger(userId: string) {
    return ledger.filter((entry) => entry.userId === userId).slice(-50);
  },
};

