import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => fetchProducts(), []);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(res => {
          if (res.ok) {
            setProducts(products.filter(p => p.id !== id));
          } else {
            alert("Xóa thất bại!");
          }
        })
        .catch(err => alert("Lỗi mạng!"));
    }
  };

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <Link to="/add-product">
        <button className="add">+ Thêm sản phẩm</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td><Link to={`/view-product/${p.id}`}>{p.title}</Link></td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              <td>
                <Link to={`/edit-product/${p.id}`}><button className="edit">Sửa</button></Link>
                <button className="delete" onClick={() => handleDelete(p.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
