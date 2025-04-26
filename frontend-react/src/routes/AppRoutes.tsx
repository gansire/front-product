import { Routes, Route } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ProductForm from '../pages/ProductForm';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductForm />} />
    </Routes>
  );
}
