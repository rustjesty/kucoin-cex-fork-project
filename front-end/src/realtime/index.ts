import WebSocketConnection from './websocket';

class SocketConnection extends WebSocketConnection {

  constructor() {
    super();
    console.log("SocketConnection")
  }

  // // Overriding the on method to handle events
  // public on(eventName: string, callback: (data?: any) => void): void {
  //   console.log("socket on")
  //   // Implement event handling logic here
  //   // For example, you might want to store event handlers in a dictionary
  // };

  // // Overriding the off method to remove event handlers
  // public off(eventName: string): void {
  //   // Implement logic to remove event handlers
  // };
}

export const socket: WebSocketConnection = new WebSocketConnection();

declare global {
  interface Window {
    socket: SocketConnection;
  }
}

window.socket = socket;