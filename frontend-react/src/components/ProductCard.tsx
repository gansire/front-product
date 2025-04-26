import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}