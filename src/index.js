import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoMaker } from "./pages/TodoMaker";
import { TodoView } from "./pages/TodoView";
import { TodosProvider } from "./context/TodosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TodoMaker />} />
        <Route exact path="/view" element={<TodoView />} />
      </Routes>
    </BrowserRouter>
  </TodosProvider>
);
