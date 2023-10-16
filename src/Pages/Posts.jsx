import { useLoaderData, NavLink, useNavigation } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();
  console.log("🚀 ~ file: Posts.jsx:6 ~ Posts ~ posts:", posts);

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
