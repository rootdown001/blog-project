import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { URLS } from "../App";
import { getPost } from "../api/postsGet";
import { getComments } from "../api/commentsGet";
import { getUser } from "../api/usersGet";

export default function Post() {
  const { post, comments, user } = useLoaderData();

  const { state } = useNavigation();

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <NavLink to={`/users/${user?.id}`}>{user?.name}</NavLink>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments &&
          comments.map((comment) => {
            return (
              <div key={comment.id} className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">{comment.email}</div>
                  {comment.body}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

async function loader({ params, request: { signal } }) {
  const comments = getComments(params.id, {
    signal,
  });
  const post = await getPost(params.id, {
    signal,
  });
  const user = getUser(post.userId, {
    signal,
  });
  console.log("🚀 ~ file: Post.jsx:95 ~ loader ~ post:", post);

  return { comments: await comments, post, user: await user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
