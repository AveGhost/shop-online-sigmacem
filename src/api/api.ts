import axios from "axios";

const api = axios.create({
  baseURL: 'https://dummyjson.com/products',
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
