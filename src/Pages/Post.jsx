import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";
import { getPost } from "../api/postsGet";

export default function Post() {
  const post = useLoaderData();

  const { state } = useNavigation();

  const {
    data: user,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch(`${URLS.USERS}/${post.userId}`);

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useFetch(`${URLS.POSTS}/${post.id}/comments`);

  if (
    process.env.NODE_ENV === "production" &&
    (isUsersError || isCommentsError)
  ) {
    return <h2>Error fetching data...</h2>;
  }

  if (
    process.env.NODE_ENV === "development" &&
    (isUsersError || isCommentsError)
  ) {
    return (
      <div>
        <h2>Error fetching data...</h2>
        <pre>{`${isUsersError && "Users Error: " + isUsersError}\n${
          isCommentsError && "Comments Error: " + isCommentsError
        }`}</pre>
      </div>
    );
  }

  return (
    <>
      {/* <div
        className={
          state === "loading" || isUsersLoading || isCommentsLoading
            ? "loading-spinner"
            : ""
        }
      ></div>
      <div
        className={
          state === "loading" || isUsersLoading || isCommentsLoading
            ? "container loading"
            : "container"
        }
      > */}
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
      {/* </div> */}
    </>
  );
}

function loader({ params, request: { signal } }) {
  return getPost(params.id, {
    signal,
  });
}

export const postRoute = {
  loader,
  element: <Post />,
};
