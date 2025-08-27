import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../config";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`).then(res => res.json()).then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="container">Loading...</p>;

  return (
    <div className="container">
      <h1>Chi tiết sản phẩm</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <Link to="/"><button>Quay lại</button></Link>
    </div>
  );
}

export default ProductDetail;