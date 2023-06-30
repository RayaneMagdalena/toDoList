// image
import iconSearch from '../../../public/assets/iconSearch.png';

// Css
import "./Search.css"

const Search = ({search, setSearch}) => {
  return (
    <div className="search">


        <input 
        type="text"
        placeholder="Encontre sua tarefa..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
        
         <img src={iconSearch} alt="imagem de uma lupa" />

    </div>
  )
}

export default Search