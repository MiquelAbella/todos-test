import React, { useContext } from "react";
import TodosContext from "../../context/TodosContext";

export const TodoColumn = ({
  todos,
  title,
  color,
  setSelectedTodo,
  selectedTodo,
}) => {
  const { todosList, setTodosList } = useContext(TodosContext);

  const deleteTodo = (todo) => {
    const filteredTodos = todosList.filter(
      (todoFromContext) => todoFromContext.text !== todo.text
    );
    setTodosList(filteredTodos);
  };

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="flex flex-col items-center justify-start gap-4 m-2 border border-blue-500">
      <p className="text-2xl">{title}</p>

      {todos.map((todo) => {
        const isSelected = selectedTodo?.text === todo.text
        return (
          <div
            className={`w-full p-3 ${color} flex items-center justify-between ${isSelected ? "border border-red-800": ""}`}
            onClick={() => handleSelectTodo(todo)}
          >
            <p className="text-white">{todo.text}</p>
            <button
              className="bg-red-500 text-white p-3 rounded-full"
              onClick={() => deleteTodo(todo)}
            >
              DEL
            </button>
          </div>
        );
      })}
    </div>
  );
};
