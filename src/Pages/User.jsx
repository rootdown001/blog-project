import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";
import { getUser } from "../api/usersGet";

export default function User() {
  const user = useLoaderData();

  const { state } = useNavigation();

  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
  } = useFetch(`${URLS.POSTS}?userId=${user.id}`);

  const {
    data: todos,
    isError: isTodosError,
    isLoading: isTodosLoading,
  } = useFetch(`${URLS.TODOS}?userId=${user.id}`);

  if (process.env.NODE_ENV === "production" && (isPostsError || isTodosError)) {
    return <h2>Error fetching data...</h2>;
  }

  if (
    process.env.NODE_ENV === "development" &&
    (isPostsError || isTodosError)
  ) {
    return (
      <div>
        <h2>Error fetching data...</h2>
        <pre>{`${isPostsError && "Posts Error: " + isPostsError}\n${
          isTodosError && "Todos Error: " + isTodosError
        }`}</pre>
      </div>
    );
  }

  return (
    <>
      {/* <div
        className={
          state === "loading" || isPostsLoading || isTodosLoading
            ? "loading-spinner"
            : ""
        }
      ></div>
      <div
        className={
          state === "loading" || isPostsLoading || isTodosLoading
            ? "container loading"
            : "container"
        }
      > */}
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id} className="card">
                <div className="card-header">{post.title}</div>
                <div className="card-body">
                  <div className="card-preview-text">{post.body}</div>
                </div>
                <div className="card-footer">
                  <NavLink className="btn" to={`/posts/${post.id}`}>
                    View
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={todo.completed ? "strike-through" : ""}
              >
                {todo.title}
              </li>
            );
          })}
      </ul>
      {/* </div> */}
    </>
  );
}

function loader({ params, request: { signal } }) {
  return getUser(params.id, {
    signal,
  });
}

export const userRoute = {
  loader,
  element: <User />,
};
