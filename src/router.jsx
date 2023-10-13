import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Temp from "./Pages/Temp";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Temp /> },
      {
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/posts", { signal });
        },
        path: "/posts",
        element: <Posts />,
      },
      {
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/users", { signal });
        },
        path: "/users",
        element: <Users />,
      },
      { path: "/todos", element: <Todos /> },
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
