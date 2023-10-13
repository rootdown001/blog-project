import { useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  console.log("🚀 ~ file: Users.jsx:6 ~ Users ~ users:", users);

  return <div>Users</div>;
}
