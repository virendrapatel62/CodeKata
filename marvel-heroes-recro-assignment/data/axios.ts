import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com",
});

api.interceptors.request.use((config) => {
  console.log(config.url);
  return config;
});

const clientApi = axios.create({});

clientApi.interceptors.request.use((config) => {
  console.log(config.url);
  return config;
});

export { api, clientApi };
