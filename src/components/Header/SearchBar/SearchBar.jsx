import { BsSearch } from 'react-icons/bs'
import { useState, useContext } from 'react';
import './SearchBar.css'
import AppContext from '../../../context/AppContext';
import fetchProdutos from '../../../api/fetchProducos';


const SearchBar = () => {
    const { setProdutos, setLoading } = useContext(AppContext);
    const [valorBusca, setValorBusca] = useState('');


    const buscaProduto = async (event) => {
        event.preventDefault(); //Serve para evitar o carregamento da pagina ao pesquisar
        setLoading(true);
        const produtos = await fetchProdutos(valorBusca);

        setProdutos(produtos);
        setLoading(false)
        setValorBusca('')
    }

    return (
        <form className='search-bar' onSubmit={buscaProduto}>

            <button type="submit" className="search_button">
                <BsSearch />
            </button>
            <input
                type="search"
                value={valorBusca}
                placeholder="Busca produtos"
                className="search_inpunt"
                required
                onChange={({ target }) => setValorBusca(target.value)}
            />

        </form>

    );

}



export default SearchBar;