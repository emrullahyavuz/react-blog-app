import "./BlogList.css";
import BlogItem from "./BlogItem";
import { blogData } from "../../data/blogData.js";
import { useState } from "react";
import AddNewBlog from "./AddNewBlog.jsx";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  let currentBlogs = sortedBlogs;

  const handleDelete = (id) => {
    currentBlogs = sortedBlogs.filter((blog) => blog.id !== id);
    setBlogs(currentBlogs);
  };

  const handleUpdate = (id, updatedTitle, updatedContent) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, title: updatedTitle, content: updatedContent }
          : blog
      )
    );
  };

  return (
    <>
      <div>
        <AddNewBlog blogs={blogs} setBlogs={setBlogs} />
      </div>
      <div>
        <div className="blog-filter">
          <input
            type="text"
            className="blog-input"
            placeholder="Ara..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            value={sortBy}
            className="blog-select"
            onChange={handleSortChange}
          >
            <option value="date">Tarih</option>
            <option value="author">Yazar</option>
          </select>
        </div>

        <div>
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <BlogItem
                key={blog.id}
                blog={blog}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))
          ) : (
            <h1 style={{ textAlign: "center", color: "red" }}>
              Yeni Blog yok.
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
