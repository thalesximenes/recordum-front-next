import { RootState } from "@/redux/rootReducer";
import { Store } from "redux";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
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
