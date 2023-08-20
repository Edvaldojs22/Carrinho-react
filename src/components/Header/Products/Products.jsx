import fetchProdutos from '../../../api/fetchProducos';
import './Products.css'
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        fetchProdutos('smartphone').then((resposta) => {
            setProdutos(resposta)

        })

    }, []);



    return (
        <section className="products container">

            {
                produtos.map((produto) => <ProductCard key={produto.id} data={produto} />)
            }

        </section>
    );
}


export default Products;