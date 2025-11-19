import crypto from 'crypto';
import { z } from 'zod';
import { User } from '../types';

const users = new Map<string, User>();
const tokens = new Map<string, string>(); // token -> userId

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  nickname: z.string().min(2).max(20).optional(),
});

const hashPassword = (input: string) =>
  crypto.createHash('sha256').update(input).digest('hex');

const ensureSeedUser = () => {
  if (users.size === 0) {
    const id = crypto.randomUUID();
    users.set('demo@cex.local', {
      id,
      email: 'demo@cex.local',
      nickname: 'Demo Trader',
      passwordHash: hashPassword('changeme'),
      createdAt: new Date().toISOString(),
    });
  }
};

ensureSeedUser();

export const authService = {
  register(input: z.infer<typeof credentialsSchema>) {
    const payload = credentialsSchema.parse(input);
    const exists = users.has(payload.email);
    if (exists) {
      throw Object.assign(new Error('Email already registered'), {
        status: 409,
      });
    }

    const user: User = {
      id: crypto.randomUUID(),
      email: payload.email,
      nickname: payload.nickname ?? payload.email.split('@')[0],
      passwordHash: hashPassword(payload.password),
      createdAt: new Date().toISOString(),
    };

    users.set(user.email, user);
    return { id: user.id, email: user.email, nickname: user.nickname };
  },

  login(input: Pick<z.infer<typeof credentialsSchema>, 'email' | 'password'>) {
    const payload = credentialsSchema
      .omit({ nickname: true })
      .parse(input);

    const user = users.get(payload.email);
    if (!user || user.passwordHash !== hashPassword(payload.password)) {
      throw Object.assign(new Error('Invalid credentials'), { status: 401 });
    }

    const token = crypto.randomUUID();
    tokens.set(token, user.id);

    return {
      token,
      user: { id: user.id, email: user.email, nickname: user.nickname },
    };
  },

  verifyToken(token: string) {
    return tokens.get(token);
  },

  getProfile(userId: string) {
    for (const user of users.values()) {
      if (user.id === userId) {
        const { passwordHash, ...rest } = user;
        return rest;
      }
    }
    return null;
  },
};

