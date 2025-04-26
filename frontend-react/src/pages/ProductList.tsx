import { useState, useEffect } from 'react';
import api from '../api/axios';
import {apiRoutes}  from '../api/routes';
import ProductCard from '../components/ProductCard';
import ProductSearchName from '../components/ProductSearchName';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../context/CategoryContext';

export default function ProductList(){
    const { category } = useCategoryContext();
    const [searchName, setSearchName] = useState('');
    const [product, setProduct] =  useState<any[]>([]); 

    useEffect(() => {
        api.get(apiRoutes.product)
            .then(res => setProduct(res.data))
          .catch(err => console.error('Erro ao buscar produtos:', err));
    }, []);

    const searchingProduct = product.filter((products)=> products.name.toLowerCase().includes(searchName.toLowerCase()))
    if(category.length === 0){
        return <div>Carregando categorias...</div>
    }
    return(
        <div className='product-list-container'>
            <div className='product-list-header'>
                <ProductSearchName value={searchName} onChange={setSearchName}/>
                <Link to={'/product/0'} className='add-button'>Adicionar Produto</Link>
            </div>
            <div className='product-list'>
                {searchingProduct.map(product => (
                    <ProductCard key={product.id} product={product} category={category}/>
                ))}
            </div>
        </div>
    )
}