import { useState, KeyboardEvent } from "react";
import searchStyles from './Seacrh.module.css';

type SeacrhProps = {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SeacrhProps) => {
  const [userName, setUserName] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  }

  return (
    <div className={searchStyles.search}>
      <h2>Busque por um usuário!</h2>
      <div className={searchStyles.search_container}>
        <input 
          type="text" 
          placeholder="Nome do usuário" 
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Search;