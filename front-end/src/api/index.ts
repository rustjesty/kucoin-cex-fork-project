import axios from "axios";

const backendUrl = "https://nodes.oxfx.io"

const config = {
  baseURL: backendUrl,
};

export const instance = axios.create(config);

export const authenticatedInstance = axios.create(config)


