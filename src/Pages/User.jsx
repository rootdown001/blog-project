import { useLoaderData } from "react-router-dom";

export default function User() {
  const user = useLoaderData();
  console.log("🚀 ~ file: User.jsx:5 ~ User ~ user:", user);

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
        <div class="card">
          <div class="card-header">qui est esse</div>
          <div class="card-body">
            <div class="card-preview-text">
              est rerum tempore vitae sequi sint nihil reprehenderit dolor
              beatae ea dolores neque fugiat blanditiis voluptate porro vel
              nihil molestiae ut reiciendis qui aperiam non debitis possimus qui
              neque nisi nulla
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" href="posts.html">
              View
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            ea molestias quasi exercitationem repellat qui ipsa sit aut
          </div>
          <div class="card-body">
            <div class="card-preview-text">
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et velit aut
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" href="posts.html">
              View
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">eum et est occaecati</div>
          <div class="card-body">
            <div class="card-preview-text">
              ullam et saepe reiciendis voluptatem adipisci sit amet autem
              assumenda provident rerum culpa quis hic commodi nesciunt rem
              tenetur doloremque ipsam iure quis sunt voluptatem rerum illo
              velit
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" href="posts.html">
              View
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">nesciunt quas odio</div>
          <div class="card-body">
            <div class="card-preview-text">
              repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed
              est voluptatem omnis possimus esse voluptatibus quis est aut
              tenetur dolor neque
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" href="posts.html">
              View
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">dolorem eum magni eos aperiam quia</div>
          <div class="card-body">
            <div class="card-preview-text">
              ut aspernatur corporis harum nihil quis provident sequi mollitia
              nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit
              accusantium quas voluptate dolores velit et doloremque molestiae
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
