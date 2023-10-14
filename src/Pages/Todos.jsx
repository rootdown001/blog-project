import { useLoaderData } from "react-router-dom";

export default function Todos() {
  const todos = useLoaderData();
  console.log("🚀 ~ file: Todos.jsx:5 ~ Todos ~ todos:", todos);

  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed === true ? "strike-through" : ""}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
