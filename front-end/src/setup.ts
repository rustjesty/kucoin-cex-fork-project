interface WindowSetup {
  backendUrl: string;
  secret: string;
websocketUrl: string;
  tsApiUrl: string;
}

declare global {
  interface Window {
    setup: WindowSetup;
  }
}

const {
  setup: { backendUrl, secret, websocketUrl, tsApiUrl },
} = window;

export { backendUrl, secret, websocketUrl, tsApiUrl };
