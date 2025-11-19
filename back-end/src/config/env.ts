import dotenv from 'dotenv';

dotenv.config();

const number = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  port: number(process.env.PORT, 5050),
  wsHeartbeatMs: number(process.env.WS_HEARTBEAT_MS, 5_000),
  seed: process.env.SEED || 'kucoin-fork',
};

