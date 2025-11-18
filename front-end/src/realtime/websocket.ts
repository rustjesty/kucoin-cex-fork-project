import { isArray, isString } from 'lodash'

import { useAppSelector } from '../hooks';

interface WebSocketData {
  event: string;
  data?: any;
  method?: string;
}

const websocketUrl = "wss://nodes.oxfx.io/ws";

export default class WebSocketConnection {
  // @ts-ignore
  private connection: WebSocket;
  private afterStart: (() => void)[];
  // private subscriptions: { [key: string]: string };
  private eventHandlers: { [key: string]: (data?: any) => void };
  private lastTs: number;
  private tradingPair: string | string[];

  constructor() {
    this.afterStart = [];
    // this.subscriptions = {};
    this.eventHandlers = {};
    this.initialize();

    this.lastTs = new Date().getTime();
    this.tradingPair = '';
  }

  private initialize(): void {
    this.connection = new WebSocket(websocketUrl);

    this.connection.onmessage = this.handleMessage;
    this.connection.onopen = this.handleConnect;
    this.connection.onclose = this.handlDisconnect;
    this.connection.onerror = this.handlError;
  }

  private init_reauth(): void {
    this.subscribe('MK');
    this.subscribe('CH', this.tradingPair);

    const accessToken = useAppSelector((state) => state.auth.accessToken)
    if (accessToken) {
      this.login(accessToken);
    }
  }

  public getLastTS(): number {
    return this.lastTs;
  }

  private handleConnect = (): void => {
    this.subscribe('MK');
    this.afterStarted();
  };

  private handlDisconnect = (): void => {
    setTimeout(() => {
      this.initialize();
      this.init_reauth();
    }, 5000);
  }

  private handlError = (): void => {
    // handle error
  }

  private handleMessage = (rawData: MessageEvent): void => {
    const data: WebSocketData = JSON.parse(rawData?.data);

    if (data) {
      const event = data?.event;


      if (event) {
        if (Array.isArray(this.tradingPair)) {
          if (data.event.includes(".")) {
            if (data.event.split('.')[1] !== this.tradingPair[0]) {
              // this.unsubscribe('PO', [data.event.split('.')[1]]);
              return;
            }
          }
        } else {
          if (data.event.includes(".")) {
            if (data.event.split('.')[1] !== this.tradingPair) {
              // this.unsubscribe('PO', [data.event.split('.')[1]]);
              return;
            }
          }
        }

        const [eventName] = event.split('.');
        const method = this.eventHandlers?.[eventName];

        if (method) {
          method(data?.data);
        }

        if (data?.event == "MK") {
          this.lastTs = new Date().getTime();
        }
        // @ts-ignore
        if (data.method === 'subscribe' && data.event && data.event[0].event == "BL" && data.event[0].message == "Access denied.") {
          // @ts-ignore
          const { auth: { authorization } } = store.getState();
          if (authorization) {
            this.login(authorization);
          }
        }
      }
    }
  };

  private afterStarted = (): void => {
    if (this.afterStart.length) {
      this.afterStart.forEach(singleFn => singleFn());
      this.afterStart = [];
    }
  };

  private getEventsWithChannels(events: string | string[], channels?: string | string[]): string[] {
    console.log("getEventsWithChannels", events, channels)
    let initialEvents = isArray(events) ? events : [events];
    if (!channels) {
      console.log("initialEvents", initialEvents)
      return initialEvents;
    }

    const channelString = isArray(channels) ? channels.join('.') : channels;

    const updatedEvents = initialEvents.map(singleEvent => `${singleEvent}.${channelString}`);
    console.log("updatedEvents", updatedEvents)
    return updatedEvents;
  }

  public subscribe(events: string | string[], channels?: string | string[]): void {
    console.log("subscribing.....")
    if (channels !== undefined) {
      this.tradingPair = channels;
    }

    this.send({
      method: 'subscribe',
      events: this.getEventsWithChannels(events, channels),
    });
    console.log("subscribe sent!!!");
  }

  public unsubscribe(events: string | string[], channels?: string | string[]): void {
    this.send({
      method: 'unsubscribe',
      events: this.getEventsWithChannels(events, channels),
    });
  }

  public login(token: string): void {
    this.send({
      method: 'login',
      token,
    });
    this.unsubscribe('BL');
    this.subscribe('BL');
  }

  public logout(): void {
    this.send({
      method: 'logout',
    });
  }

  private send(message: string | object): void {
    const messageToSend = isString(message) ? message : JSON.stringify(message);
    console.log("MK event data:", messageToSend, message)
    if (this.connection.readyState === 1) {
      return this.connection.send(messageToSend);
    }

    this.afterStart = [
      ...this.afterStart,
      () => {
        this.send(message);
      },
    ];
  }

  public on(eventName: string, callback: (data?: any) => void): void {
    this.eventHandlers[eventName] = callback;

  };

  public off(eventName: string): void {
    delete this.eventHandlers[eventName];
  };
}
