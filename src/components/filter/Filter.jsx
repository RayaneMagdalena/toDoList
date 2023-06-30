import "./Filter.css";

const Filter = ({ filter, setFilter, categoryFilter, setCategoryFilter }) => {
  return (
    <div>

      <div className="filter">
        <div className="filter-container">
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </select>
        </div>

        <div className="filter-container">
          <p>Categoria:</p>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoal">Pessoal</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
