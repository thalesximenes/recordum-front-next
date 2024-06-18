import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8095",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
});

export const apiLogin = axios.create({
  baseURL: "https://desenv-login-be.sop.ce.gov.br/login",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
});

export default api;
