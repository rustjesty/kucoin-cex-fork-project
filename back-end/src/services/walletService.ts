import { accountService } from './accountService';

export const walletService = {
  deposit(userId: string, currency: string, amount: number) {
    if (amount <= 0) {
      throw Object.assign(new Error('Amount must be positive'), { status: 400 });
    }
    return accountService.credit(userId, currency, amount, 'wallet deposit');
  },

  withdraw(userId: string, currency: string, amount: number) {
    if (amount <= 0) {
      throw Object.assign(new Error('Amount must be positive'), { status: 400 });
    }
    return accountService.debit(userId, currency, amount, 'wallet withdrawal');
  },
};

