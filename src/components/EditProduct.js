// EditProduct.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";

function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => setForm({ title: data.title, price: data.price, description: data.description }));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    fetch(`${API_URL}/${id}`, { 
      method: "PUT", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(form) 
    })
    .then(() => navigate("/"));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h1>Cập nhật sản phẩm</h1>
      <form>
        <input type="text" name="title" value={form.title} onChange={handleChange} />
        <input type="text" name="price" value={form.price} onChange={handleChange} />
        <input type="text" name="description" value={form.description} onChange={handleChange} />
        <div style={{ marginTop: "10px" }}>
          <button type="button" className="edit" onClick={handleUpdate}>Lưu</button>
          <button type="button" style={{ marginLeft: "10px" }} onClick={handleBack}>Quay lại</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
