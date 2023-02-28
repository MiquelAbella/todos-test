import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { TodoColumn } from "../../components/TodoColumn";
import TodosContext from "../../context/TodosContext";

export const TodoView = () => {
  const { todosList } = useContext(TodosContext);

  const pendingTodos = todosList.filter((todo) => todo.status === "pending");
  const inProgressTodos = todosList.filter(
    (todo) => todo.status === "inProgress"
  );
  const finishedTodos = todosList.filter((todo) => todo.status === "finished");

  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div>
      <NavLink className="absolute top-6 right-6" to="/">
        Todo Maker
      </NavLink>
      {selectedTodo && (
        <div>
          <p>Move to:</p>
          <select>
            <option>Pending</option>
            <option>In progress</option>
            <option>Finished</option>
          </select>
        </div>
      )}
      <div className="grid grid-cols-3 w-full h-screen mt-[10vh] gap-4 p-3">
        <TodoColumn
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          title="pending"
          todos={pendingTodos}
          color="bg-blue-500"
        />
        <TodoColumn
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          title="in progress"
          todos={inProgressTodos}
          color="bg-yellow-500"
        />
        <TodoColumn
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          title="finished"
          todos={finishedTodos}
          color="bg-green-500"
        />
      </div>
    </div>
  );
};
