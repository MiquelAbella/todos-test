import { useContext } from "react";
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

  return (
    <div>
      <NavLink className="absolute top-6 right-6" to="/">
        Todo Maker
      </NavLink>
      <div className="grid grid-cols-3 w-full h-screen mt-[20vh] gap-4 p-3">
       <TodoColumn title="pending" todos={pendingTodos} color="bg-blue-500"/>
       <TodoColumn title="in progress" todos={inProgressTodos} color="bg-yellow-500"/>
       <TodoColumn title="finished" todos={finishedTodos} color="bg-green-500"/>
       
      </div>
    </div>
  );
};
