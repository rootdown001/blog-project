import { useLoaderData } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();
  console.log("🚀 ~ file: Posts.jsx:6 ~ Posts ~ posts:", posts);

  return (
    <div className="container">
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
                <a className="btn">View</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
