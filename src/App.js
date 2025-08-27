import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/view-product/:id" element={<ProductDetail />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>)
}

export default App;
