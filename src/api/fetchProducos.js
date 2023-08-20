const fetchProdutos = async  (consulta) => {

    const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${consulta}`);
    const data = await resposta.json();

    return data.results;
   
};


export default fetchProdutos;