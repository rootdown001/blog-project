import axios from "axios";
import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { getPosts } from "../api/postsGet";

export default function Posts() {
  const posts = useLoaderData();

  const { state } = useNavigation();

  return (
    <>
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
    </>
  );
}

function loader({ request: { signal } }) {
  // use axios instead of fetch so we can take advantage of axious features later
  return getPosts({ signal });
}

export const postsRoute = {
  loader,
  element: <Posts />,
};
