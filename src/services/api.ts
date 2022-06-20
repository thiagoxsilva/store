import axios from "axios";

const api: any = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default api;
