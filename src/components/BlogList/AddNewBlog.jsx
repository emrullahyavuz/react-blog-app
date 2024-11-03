import { useState } from "react";
import PropTypes from "prop-types";
import "./AddNewBlog.css";
import Button from "../UI/Button";

const AddNewBlog = ({ blogs, setBlogs }) => {
  const [blog, setBlog] = useState({
    id: "",
    title: "",
    author: "",
    date: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      id: Math.floor(Math.random() * 9999),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const invalid = Object.values(blog).every((item) => item !== "");
    if (!invalid) {
      console.error("Formdaki tüm alanları doldurmanız zorunludur.");
      return;
    }
    setBlogs([...blogs,blog]);
  };
  

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Yeni Blog Yazısı Ekle</h2>
        <form action="#" method="post" onSubmit={handleSubmit}>
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            required
          />

          <label htmlFor="author">Yazar:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Tarih:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            required
          />

          <label htmlFor="content">İçerik:</label>
          <textarea
            id="content"
            name="content"
            rows="5"
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="tags">Etiketler:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={handleChange}
            placeholder="Örn: Yazılım, Frontend, JavaScript"
            required
          />

          <Button className="add">Yeni Blog Yazısı Ekle</Button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBlog;

AddNewBlog.propTypes = {
  blogs: PropTypes.array,
  setBlogs: PropTypes.func,
};
