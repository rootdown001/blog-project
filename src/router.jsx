import { Navigate, createBrowserRouter } from "react-router-dom";
import Error404 from "./Pages/Error404";
import NavLayout from "./layouts/NavLayout";
import { postsRoute } from "./Pages/Posts";
import { usersRoute } from "./Pages/Users";
import { todosRoute } from "./Pages/Todos";
import { postRoute } from "./Pages/Post";
import { userRoute } from "./Pages/User";

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
                ...postRoute,
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
                ...userRoute,
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
