## KuCoin CEX Fork Overview

This repository contains a learning-oriented fork of a centralized exchange (CEX) inspired by KuCoin. It is organized as a monorepo with a `front-end/` React client and a `back-end/` service layer (to be implemented). Use it as a starting point for experimenting with exchange-style flows such as authentication, portfolio management, order entry, and market data displays.

### Project Structure
- `front-end/`: Vite + React application, currently providing most of the KuCoin-like UI/UX, page flows, and mock data hooks.
- `back-end/`: Placeholder for Node.js/TypeScript services that will eventually power account, wallet, and order-matching APIs.

### Getting Started (Front End)
1. `cd front-end`
2. `npm install`
3. `npm run dev`
4. Visit the printed local URL to explore the KuCoin-style interface.

### Next Steps (Back End)
- Initialize a Node.js project under `back-end/`.
- Define core modules: authentication, KYC, account ledger, wallet management, order book/matching, and WebSocket market feeds.
- Expose REST + WebSocket APIs consumed by the existing front-end hooks in `src/api/` and `src/realtime/`.

### Notes
- This codebase is for educational and prototyping purposes only. Do not deploy it as-is for production trading activities.
- Contributions welcome—open an issue or PR describing the feature or fix you’re proposing.

