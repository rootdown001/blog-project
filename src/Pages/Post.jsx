import { useLoaderData, NavLink, useNavigation } from "react-router-dom";
import { useFetch } from "../useFetch";
import { URLS } from "../App";
import { getPost } from "../api/postsGet";
import { getComments } from "../api/commentsGet";
import { getUser } from "../api/usersGet";

export default function Post() {
  const { post, comments, user } = useLoaderData();

  const { state } = useNavigation();

  // const {
  //   data: user,
  //   isLoading: isUsersLoading,
  //   isError: isUsersError,
  // } = useFetch(`${URLS.USERS}/${post.userId}`);

  // const {
  //   data: comments,
  //   isLoading: isCommentsLoading,
  //   isError: isCommentsError,
  // } = useFetch(`${URLS.POSTS}/${post.id}/comments`);

  // if (
  //   process.env.NODE_ENV === "production" &&
  //   (isUsersError || isCommentsError)
  // ) {
  //   return <h2>Error fetching data...</h2>;
  // }

  // if (
  //   process.env.NODE_ENV === "development" &&
  //   (isUsersError || isCommentsError)
  // ) {
  // return (
  //   <div>
  //     <h2>Error fetching data...</h2>
  //     <pre>{`${isUsersError && "Users Error: " + isUsersError}\n${
  //       isCommentsError && "Comments Error: " + isCommentsError
  //     }`}</pre>
  //   </div>
  // );
  // }

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

async function loader({ params, request: { signal } }) {
  const comments = await getComments(params.id, {
    signal,
  });
  const post = await getPost(params.id, {
    signal,
  });
  const user = await getUser(post.userId, {
    signal,
  });
  console.log("🚀 ~ file: Post.jsx:95 ~ loader ~ post:", post);

  return { comments, post, user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
