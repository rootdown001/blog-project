import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";
import { getUser } from "../api/usersGet";
import { getPosts } from "../api/postsGet";
//import { getTodos } from "../api/todosGet";
import { baseApi } from "../api/base";
import TodoItem from "../components/TodoItem";

export default function User() {
  const { user, todos, posts } = useLoaderData();

  return (
    <>
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
        {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </ul>
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

function getTodos(options) {
  // use baseApi instead of axios - made with axios.create
  return baseApi.get("todos", options).then((res) => res.data);
}
