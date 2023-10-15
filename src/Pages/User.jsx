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

  return (
    <div class="container">
      <h1 class="page-title">{user.name}</h1>
      <div class="page-subtitle">{user.email}</div>
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
      <h3 class="mt-4 mb-2">Posts</h3>
      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </div>
          <div class="card-body">
            <div class="card-preview-text">
              quia et suscipit suscipit recusandae consequuntur expedita et cum
              reprehenderit molestiae ut ut quas totam nostrum rerum est autem
              sunt rem eveniet architecto
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" href="posts.html">
              View
            </a>
          </div>
        </div>
      </div>
      <h3 class="mt-4 mb-2">Todos</h3>
      <ul>
        <li>delectus aut autem</li>
        <li>quis ut nam facilis et officia qui</li>
        <li>fugiat veniam minus</li>
        <li class="strike-through">et porro tempora</li>
        <li>laboriosam mollitia et enim quasi adipisci quia provident illum</li>
        <li>qui ullam ratione quibusdam voluptatem quia omnis</li>
        <li>illo expedita consequatur quia in</li>
        <li class="strike-through">quo adipisci enim quam ut ab</li>
      </ul>
    </div>
  );
}
