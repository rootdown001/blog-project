import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";
import { getUser } from "../api/usersGet";
import { getPosts } from "../api/postsGet";
import { getTodos } from "../api/todosGet";

export default function User() {
  const { user, todos, posts } = useLoaderData();
  console.log("🚀 ~ file: User.jsx:10 ~ User ~ posts:", posts);
  console.log("🚀 ~ file: User.jsx:10 ~ User ~ todos:", todos);
  console.log("🚀 ~ file: User.jsx:10 ~ User ~ user:", user);

  // const { state } = useNavigation();

  // const {
  //   data: posts,
  //   isError: isPostsError,
  //   isLoading: isPostsLoading,
  // } = useFetch(`${URLS.POSTS}?userId=${user.id}`);

  // const {
  //   data: todos,
  //   isError: isTodosError,
  //   isLoading: isTodosLoading,
  // } = useFetch(`${URLS.TODOS}?userId=${user.id}`);

  // if (process.env.NODE_ENV === "production" && (isPostsError || isTodosError)) {
  //   return <h2>Error fetching data...</h2>;
  // }

  // if (
  //   process.env.NODE_ENV === "development" &&
  //   (isPostsError || isTodosError)
  // ) {
  //   return (
  //     <div>
  //       <h2>Error fetching data...</h2>
  //       <pre>{`${isPostsError && "Posts Error: " + isPostsError}\n${
  //         isTodosError && "Todos Error: " + isTodosError
  //       }`}</pre>
  //     </div>
  //   );
  // }

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

async function loader({ request: { signal }, params: { userId } }) {
  const user = getUser(userId, { signal });
  const todos = getTodos({ signal, params: { userId } });
  const posts = getPosts({ signal, params: { userId } });

  return { user: await user, todos: await todos, posts: await posts };
}

export const userRoute = {
  loader,
  element: <User />,
};
