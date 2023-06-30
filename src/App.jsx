
// Hook
import React, { useState } from "react";

// Components
import TodoForm from "./components/todoForm/TodoForm";
import Search from "./components/search/Search";
import Filter from "./components/filter/Filter";
import TodoList from "./components/TodoList";

// Css
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");
  const [categoryFilter, setCategoryFilter] = useState("Todas");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>

      <div className="todo-control-panel">
        <Search search={search} setSearch={setSearch} />

        <Filter 
        filter={filter} 
        setFilter={setFilter} 
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter} 
        />
      </div>

      <div>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          search={search}
          filter={filter}
          categoryFilter={categoryFilter}
        />
      </div>

      <div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
