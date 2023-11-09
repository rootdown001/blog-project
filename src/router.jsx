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
import { postsRoute } from "./Pages/Posts";
import { usersRoute } from "./Pages/Users";
import { todosRoute } from "./Pages/Todos";

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
                ...postsRoute,
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
                // spread UsersRoute - gives loader & element
                ...usersRoute,
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
            ...todosRoute,
          },
          // go to `<Error404>` if no match
          { path: "*", element: <Error404 /> },
        ],
      },
    ],
  },
]);
