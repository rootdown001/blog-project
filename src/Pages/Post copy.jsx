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

  if (isUsersLoading || isCommentsLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (isUsersError || isCommentsError) {
    // Handle error state
    return <div>Error occurred while fetching data.</div>;
  }

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
          comments
            .filter((comment) => comment.postId === post.id)
            .map((comment) => {
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
    </div>
  );
}
