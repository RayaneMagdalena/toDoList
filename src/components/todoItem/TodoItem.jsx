// Image
import check from "../../../public/assets/check.png";
import buttonDelete from "../../../public/assets/buttonDelete.png";

// Css
import "./TodoItem.css";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <div className="todo-content-title">
        <li>{todo.text}</li>
      </div>

      <div className="todo-content">
        <div className="category">
          <li>{todo.category}</li>
        </div>

        <div className="todo-buttons">
          <button className="button done" onClick={handleCompleteTodo}>
            <img src={check} alt="" />
          </button>

          <button className="button" onClick={handleRemoveTodo}>
            <img src={buttonDelete} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
