

import "./TodoItem.css";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  
  return (
    
      <div 
      className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
       
        <div className="todo-content">
          <li>{todo.text}</li>
          <li className="category">({todo.category})</li>
        </div>

        <div className="todo-buttons">
          <button className="button-done" 
          onClick={handleCompleteTodo}>
            Feito
          </button>

          <button className="button-delete" 
          onClick={handleRemoveTodo}>
            x
          </button>
        
        </div>
      </div>
    
  );
}

export default TodoItem