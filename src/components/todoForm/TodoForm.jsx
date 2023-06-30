import { useState } from "react";

import "./TodoForm.css";


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

//   F. de envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // se não tiver preenchido interropno a função aqui
    // 
    const newErrors = {};

  if (!value.trim()) {
    newErrors.value = "O campo de tarefa é obrigatório.";
  }

  if (!category) {
    newErrors.category = "Selecione uma categoria.";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

    // Imprimindo o item na lista
    addTodo(value, category);

    // zerando o form
    setValue("");
    setCategory("");
    setErrors({});
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite aqui"
          name="todoInput"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="error-message">{errors.value}</div>


        <select
          name="todoCategory"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <div className="error-message">{errors.category}</div>
        
        <button type="submit">CRIAR TAREFA</button>
      </form>
    </div>
  );
};

export default TodoForm;
