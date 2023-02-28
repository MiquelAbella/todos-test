import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import TodosContext from "../../context/TodosContext";

export const TodoMaker = () => {
  const { todosList, setTodosList } = useContext(TodosContext);

  const addTodo = (e) => {
    e.preventDefault();
    setTodosList([...todosList, formData]);
  };

  const [formData, setFormData] = useState({
    text: "",
    status: "pending",
  });

  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-500 text-3xl mt-20">Todo maker</h1>
      </div>

      <form
        onSubmit={addTodo}
        className="p-6 flex flex-col gap-4 items-center justify-center"
      >
        <label htmlFor="todo">Todo</label>
        <input
          value={formData.text}
          name="text"
          type="text"
          id="todo"
          className="border border-gray-400"
          onChange={handleChangeFormData}
        />

        <label htmlFor="status">Status</label>
        <select
          value={formData.status}
          name="status"
          id="status"
          className="border border-gray-400 w-full"
          onChange={handleChangeFormData}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In progress</option>
          <option value="finished">Finished</option>
        </select>
        <button className="bg-blue-500 p-3 text-white" type="submit">
          Add todo
        </button>
      </form>
      <NavLink className="absolute top-6 right-6" to="/view">
        View todos
      </NavLink>
    </div>
  );
};
