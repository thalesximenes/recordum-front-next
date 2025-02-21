import { RootState } from "@/redux/rootReducer";
import { Store } from "redux";
import axios from "axios";

const getApiBaseUrl = () => {
  return `${process.env.NEXT_PUBLIC_BASE_URL_BACK}`;
};

const api = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
});

export const configureApi = (store: Store<RootState>) => {
  api.interceptors.request.use((config) => {
    const token = store.getState().Session.token;
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });
};

export default api;
