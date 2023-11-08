import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Post from "./Pages/Post";
import User from "./Pages/User";
import Error404 from "./Pages/Error404";
import NavLayout from "./layouts/NavLayout";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <Error404 />,
    path: "/",
    children: [
      {
        children: [
          // add Navigate to so "/" goes to "/posts"
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              // go to `<Posts>` if "/posts"
              {
                index: true,
                element: <Posts />,
                loader: ({ request: { signal } }) => {
                  return fetch("http://127.0.0.1:3000/posts", { signal });
                },
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

          // go to `<Users>` if "/users"
          {
            path: "users",
            children: [
              {
                index: true,
                element: <Users />,
                loader: ({ request: { signal } }) => {
                  return fetch("http://127.0.0.1:3000/users", { signal });
                },
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
          // go to `<Todos>` if "/todos"
          {
            path: "todos",
            element: <Todos />,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/todos", { signal });
            },
          },
          // go to `<Error404>` if no match
          { path: "*", element: <Error404 /> },
        ],
      },
    ],
  },
]);
