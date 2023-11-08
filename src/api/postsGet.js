import { baseApi } from "./base";

export function getPosts(options) {
  // use baseApi instead of axios - made with axios.create
  return baseApi.get("posts", options).then((res) => res.data);
}
