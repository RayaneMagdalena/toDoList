import TodoItem from "./todoItem/TodoItem";


const TodoList = ({
  todos,
  removeTodo,
  completeTodo,
  filter,
  search,
  categoryFilter,
}) => {

  // Filtrar os todos com base no filtro selecionado
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Todas") {
      return true;
    } else if (filter === "Completas") {
      return todo.isCompleted;
    } else if (filter === "Incompletas") {
      return !todo.isCompleted;
    }
    return true;
  });

  // Filtrar os todos com base no valor de pesquisa
  const searchTodos = filteredTodos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  // Filtrar os todos com base na categoria selecionada
  const filteredAndSearchedTodos = searchTodos.filter((todo) => {
    if (categoryFilter === "Todas") {
      return true;
    } else {
      return todo.category === categoryFilter;
    }
  });

  return (
    <div>
      <ul>
               {filteredAndSearchedTodos.map((todo) => (
             
          <TodoItem   key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
