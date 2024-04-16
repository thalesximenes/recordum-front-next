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

export default api;
