import { useLoaderData, NavLink, useNavigation } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  const { state } = useNavigation();

  return (
    <>
      <div className={state === "loading" ? "loading-spinner" : ""}></div>
      <div className={state === "loading" ? "container loading" : "container"}>
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map((post) => {
            return (
              <div key={post.id} className="card">
                <div className="card-header">{post.title}</div>
                <div className="card-body">
                  <div className="card-preview-text">{post.body}</div>
                </div>
                <div className="card-footer">
                  <NavLink to={`/posts/${post.id}`} className="btn">
                    View
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return fetch("http://127.0.0.1:3000/posts", { signal });
}

export const PostsRoute = {
  loader,
  element: <Posts />,
};
