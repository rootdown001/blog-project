import { Outlet, createBrowserRouter, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Temp from "./Pages/Temp";
import Post from "./Pages/Post";
import User from "./Pages/User";
import Error404 from "./Pages/Error404";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Temp /> },
      {
        path: "/posts",
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
              return fetch(`http://127.0.0.1:3000/posts/${params.id}`, {
                signal,
              });
            },
            element: <Post />,
          },
        ],
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/users", { signal });
            },
            element: <Users />,
          },
          {
            path: ":id",
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://127.0.0.1:3000/users/${params.id}`, {
                signal,
              });
            },
            element: <User />,
          },
        ],
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
