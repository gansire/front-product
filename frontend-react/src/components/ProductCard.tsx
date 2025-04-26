import { Link } from 'react-router-dom';
import api from '../api/axios';
import { apiRoutes } from '../api/routes';
type Category = {
  id: number;
  name: string;
};

type ProductCardProps = {
  product: any;
  category: Category[];
};
export default function ProductCard({ product, category }: ProductCardProps) {
  
  const productCategory = category.find(cat => cat.id === product.categoryId);

  const handleRemove = async (id: number) => {
    try {
      const url = `${apiRoutes.product}/${id}`
      await api.delete(url)
      window.location.reload();
    } catch (error) {
      console.error('Erro ao remover produto:', error);
    }
  }
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.qty}</p>
      <p>{productCategory ? productCategory.name : 'Sem categoria'}</p>
      <div className="actions">
        <Link to={`/product/${product.id}`} state={(product)}>Editar</Link>
        <button onClick={() => handleRemove(product.id)}>Remover</button>
      </div>
    </div>
  );
}