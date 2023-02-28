import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todosList, setTodosList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  return (
    <TodosContext.Provider value={{ todosList, setTodosList }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
