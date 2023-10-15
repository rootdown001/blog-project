import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const URLS = {
  USERS: "http://127.0.0.1:3000/users",
  POSTS: "http://127.0.0.1:3000/posts",
  COMMENTS: "http://127.0.0.1:3000/comments",
  TODOS: "http://127.0.0.1:3000/todos",
};

function App() {
  return <RouterProvider router={router} />;
}

export default App;
