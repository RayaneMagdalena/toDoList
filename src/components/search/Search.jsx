import "./Search.css"

const Search = ({search, setSearch}) => {
  return (
    <div className="search">

        <h3>Pesquisar:</h3>

        <input 
        type="text"
        placeholder="Pesquise aqui..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />

    </div>
  )
}

export default Search