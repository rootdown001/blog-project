import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Temp from "./Pages/Temp";
import Post from "./Pages/Post";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Temp /> },
      {
        path: "/posts",
        // loader: ({ request: { signal } }) => {
        //   return fetch("http://127.0.0.1:3000/posts", { signal });
        // },
        // element: <Posts />,
        children: [
          {
            index: true,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/posts", { signal });
            },
            element: <Posts />,
          },
          {
            path: ":id",
            loader: ({ params, request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/posts/:id", { signal });
            },
            element: <Post />,
          },
        ],
      },
      {
        path: "/users",
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/users", { signal });
        },
        element: <Users />,
      },
      {
        path: "/todos",
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/todos", { signal });
        },
        element: <Todos />,
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
