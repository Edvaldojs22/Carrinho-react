import fetchProdutos from '../../../api/fetchProducos';
import './Products.css'
import {useEffect,useContext} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../../context/AppContext';


const Products = () => {

    const{produtos, setProdutos, loading, setLoading} = useContext(AppContext);

    useEffect(() => {

        fetchProdutos('smartphone').then((resposta) => {
            setProdutos(resposta);
            setLoading(false)

        })

    }, []);



    return (
        (loading && <Loading />) || (
        <section className='products container'>
            {produtos.map((produto) => <ProductCard key={produto.id} data={produto} />)}
        </section>))
}


export default Products;