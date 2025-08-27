import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function AddProduct() {
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.title || !form.price) return alert("Nhập đầy đủ thông tin!");
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => navigate("/"));
  };

  const handleBack = () => navigate(-1); 

  return (
    <div className="container">
      <h1>Thêm sản phẩm</h1>
      <form>
        <div>
          <label htmlFor="title">Tên:</label>
          <input 
            id="title"
            type="text" 
            name="title" 
            placeholder="Tên sản phẩm" 
            value={form.title} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="price">Giá:</label>
          <input 
            id="price"
            type="text" 
            name="price" 
            placeholder="Giá" 
            value={form.price} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="description">Mô tả:</label>
          <input 
            id="description"
            type="text" 
            name="description" 
            placeholder="Mô tả" 
            value={form.description} 
            onChange={handleChange} 
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="button" className="add" onClick={handleAdd}>Thêm</button>
          <button type="button" className="back" onClick={handleBack} style={{ marginLeft: "10px" }}>Trở lại</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
