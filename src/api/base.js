import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:3000",
});

// TODO: debug why .env doesn't work to make baseURL
