import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class API {
  // backend url
  private baseUrl: string;
  private accessToken: string | null;
  public authenticatedInstance: AxiosInstance;
  public instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.accessToken = null;
    this.authenticatedInstance = axios.create({
      baseURL: this.baseUrl,
    }) as AxiosInstance;
    this.instance = axios.create({
      baseURL: this.baseUrl,
    }) as AxiosInstance;

    // Add interceptor to set access token in headers before each request for authenticatedInstance
    this.authenticatedInstance.interceptors.request.use(
      // @ts-ignore
      (config: AxiosRequestConfig) => {
        if (this.accessToken) {
          // Check if config.headers is defined
          if (config.headers) {
            // Update Authorization header
            config.headers.Authorization = `Bearer ${this.accessToken}`;
          } else {
            // If headers are not defined, create them
            config.headers = { Authorization: `Bearer ${this.accessToken}` };
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public setAccessToken(token: string): void {
    this.accessToken = token;
  }
}

const api = new API("https://nodes.oxfx.io");

export default api;
