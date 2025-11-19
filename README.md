## KuCoin CEX Fork Overview

This repository contains a learning-oriented fork of a centralized exchange (CEX) inspired by KuCoin. It is organized as a monorepo with a `front-end/` React client and a `back-end/` Node.js/TypeScript service layer. Use it as a starting point for experimenting with exchange-style flows such as authentication, portfolio management, order entry, and market data displays.

**📺 [Watch the Video](https://www.youtube.com/watch?v=uDJoPHH-dn8)**

## Contact
https://t.me/soljesty

### Project Structure
- `front-end/`: Vite + React application, currently providing most of the KuCoin-like UI/UX, page flows, and mock data hooks.
- `back-end/`: Express + TypeScript API covering auth, account ledger, wallet transfers, order placement, and live WebSocket market ticks.

### Getting Started (Front End)
1. `cd front-end`
2. `npm install`
3. `npm run dev`
4. Visit the printed local URL to explore the KuCoin-style interface.

### Backend Quickstart
1. `cd back-end`
2. `npm install`
3. `npm run dev`
4. REST base URL defaults to `http://localhost:5050`; WebSocket ticks stream from `ws://localhost:5050/ws/markets`.

Key modules live under `src/`:
- `routes/`: Express routers for auth, account, wallet, orders, and market data.
- `services/`: In-memory services simulating users, balances, order books, and price feeds.
- `realtime/marketHub.ts`: WebSocket broadcaster that pushes pseudo-random ticker updates.
- `middleware/`: Auth token guard plus error handling.

### Notes
- This codebase is for educational and prototyping purposes only. Do not deploy it as-is for production trading activities.
- Contributions welcome—open an issue or PR describing the feature or fix you’re proposing.

