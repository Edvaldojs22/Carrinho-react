import { BsSearch } from 'react-icons/bs'
import { useState } from 'react';
import './SearchBar.css'


const SearchBar = () => {

    const [valorInput, setValorIpunt] = useState('');



    return (
        <form className='search-bar'>
            <input
                type="search"
                value={valorInput}
                placeholder="Busca produtos"
                className="search_inpunt"
                required
                onChange={({ target }) => setValorIpunt(target.value)}
            />
            {valorInput}
            <button type="submit" className="search_button">
                <BsSearch />
            </button>
        </form>
    );

}

export default SearchBar;