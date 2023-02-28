import { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todosList, setTodosList] = useState([]);

  return (
    <TodosContext.Provider value={{ todosList, setTodosList }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext