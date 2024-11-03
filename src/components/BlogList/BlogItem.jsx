import { useState } from "react";
import PropTypes from "prop-types";
import "./BlogItem.css";
import Button from "../UI/Button";

const BlogItem = ({ blog, handleDelete, handleUpdate }) => {
  const stringData = blog.tags;
  const arrayData = stringData.split(",");

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(blog.title);
  const [updatedContent, setUpdatedContent] = useState(blog.content);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    handleUpdate(blog.id, updatedTitle, updatedContent);
    setIsEditing(false);
  };

  return (
    <div className="blog-container">
      <div className="blog-post">
        {isEditing ? (
          <div className="edit-blog">
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <textarea
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              className="blog-textarea"
            />
            <Button className="save" onClick={handleSave}>Kaydet</Button>
          </div>
        ) : (
          <>
            <h2 className="title">{blog.title}</h2>
            <p className="author">Yazar: {blog.author}</p>
            <p className="date">Tarih: {blog.date}</p>
            <div className="content">
              <p>{blog.content}</p>
            </div>
            <div className="tags">
              {arrayData.map((data, id) => (
                <span key={id}>{data}</span>
              ))}
            </div>

            <div className="buttons">
              <Button className="delete" onClick={() => handleDelete(blog.id)}>
                Blog Sil
              </Button>
              <Button className="update" onClick={handleEdit}>
                Blog Güncelle
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogItem;

BlogItem.propTypes = {
  blog: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};
