import "./Filter.css";

const Filter = ({ filter, setFilter, categoryFilter, setCategoryFilter }) => {
  return (
    <div>
      <h3>Filtrar</h3>
      <div className="filter">
        <div className="filter-container">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </select>
        </div>

        <div className="filter-container">
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
