import React, { useCallback, memo } from "react";
import { useApp } from "../hooks/useApp";

const Todo: React.FC = () => {
  const { todos, todoDispatch } = useApp();

  const getTodos = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(
      async (response) => {
        const data = await response.json();
        todoDispatch({
          type: "GET_TODOS",
          payload: data,
        });
      }
    );
  }, [todos]);

  return (
    <>
      <h1>Todos</h1>
      <button onClick={getTodos}>Listar todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default memo(Todo);
