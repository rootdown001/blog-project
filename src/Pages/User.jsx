import { useLoaderData } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";

export default function User() {
  const user = useLoaderData();
  console.log("🚀 ~ file: User.jsx:5 ~ User ~ user:", user);

  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
  } = useFetch(`${URLS.POSTS}?userId=${user.id}`);
  console.log("🚀 ~ file: User.jsx:14 ~ User ~ posts:", posts);

  const {
    data: todos,
    isError: isTodosError,
    isLoading: isTodosLoading,
  } = useFetch(`${URLS.TODOS}?userId=${user.id}`);
  console.log("🚀 ~ file: User.jsx:21 ~ User ~ todos:", todos);

  if (isPostsLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
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
                  <a className="btn" href="posts.html">
                    {/* TODO: NavLink  */}
                    View
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <li>delectus aut autem</li>
        <li>quis ut nam facilis et officia qui</li>
        <li>fugiat veniam minus</li>
        <li className="strike-through">et porro tempora</li>
        <li>laboriosam mollitia et enim quasi adipisci quia provident illum</li>
        <li>qui ullam ratione quibusdam voluptatem quia omnis</li>
        <li>illo expedita consequatur quia in</li>
        <li className="strike-through">quo adipisci enim quam ut ab</li>
      </ul>
    </div>
  );
}
