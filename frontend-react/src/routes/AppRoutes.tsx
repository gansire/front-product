import { Routes, Route } from 'react-router-dom';
import ProductList from '../pages/ProductList';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductList />} />
    </Routes>
  );
}
