import axios from "axios";

let getTokenPromise = null;

export function setGetToken(fn) {
  getTokenPromise = fn;
}

const api = axios.create({
  baseURL: "",
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  if (getTokenPromise) {
    try {
      const token = await getTokenPromise();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch {
      // token retrieval failed, proceed without it
    }
  }
  return config;
});

export default api;
