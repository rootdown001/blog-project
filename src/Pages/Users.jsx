import { useLoaderData, NavLink, useNavigation } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();
  // console.log("🚀 ~ file: Users.jsx:6 ~ Users ~ users:", users);

  const { state } = useNavigation();

  return (
    <>
      <div className={state === "loading" ? "loading-spinner" : ""}></div>
      <div className={state === "loading" ? "container loading" : "container"}>
        <h1 className="page-title">Users</h1>
        <div className="card-grid">
          {users.map((user) => {
            return (
              <div key={user.id} className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div>{user.company.name}</div>
                  <div>{user.website}</div>
                  <div>{user.email}</div>
                </div>
                <div className="card-footer">
                  <NavLink to={`/users/${user.id}`} className="btn">
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
