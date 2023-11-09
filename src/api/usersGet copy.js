import { baseApi } from "./base";

export function getUsers(options) {
  // use baseApi instead of axios - made with axios.create
  return baseApi.get("users", options).then((res) => res.data);
}
