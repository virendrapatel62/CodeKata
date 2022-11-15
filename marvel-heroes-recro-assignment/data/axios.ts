import axios from "axios";
import nextConfig from "../next.config";

const api = axios.create({
  baseURL: nextConfig.apiBaseURL,
});

const clientApi = axios.create({});

export { api, clientApi };
