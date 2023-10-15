import { useLoaderData } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";

export default function Post() {
  const post = useLoaderData();
  // console.log("🚀 ~ file: Post.jsx:5 ~ Post ~ post:", post);

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch(URLS.USERS);
  // console.log("🚀 ~ file: Post.jsx:10 ~ Post ~ users:", users);

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useFetch(URLS.COMMENTS);
  // console.log("🚀 ~ file: Post.jsx:21 ~ Post ~ comments:", comments);

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By:{" "}
        <a href="user.html">
          {users && users.find((user) => user.id === post.userId)?.name}
        </a>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments &&
          comments.map((comment) => {
            if (comment.postId === post.id) {
              return (
                <div className="card">
                  <div className="card-body">
                    <div className="text-sm mb-1">{comment.email}</div>
                    {comment.body}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
