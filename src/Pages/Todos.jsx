import { useLoaderData, useNavigation } from "react-router-dom";
import { getTodos } from "../api/todosGet";

export default function Todos() {
  const todos = useLoaderData();

  const { state } = useNavigation();

  return (
    <>
      <div className={state === "loading" ? "loading-spinner" : ""}></div>
      <div className={state === "loading" ? "container loading" : "container"}>
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={todo.completed ? "strike-through" : ""}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todosRoute = {
  loader,
  element: <Todos />,
};
