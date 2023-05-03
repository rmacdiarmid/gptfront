import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ imageUrl, title, preview, text, onImageClick }) => {
  return (
    <div className="article">
      <div className="article-img-container">
        <img src={imageUrl} alt={title} onClick={onImageClick} />
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-preview">{preview}</p>
      <p className="article-text">{text}</p>
    </div>
  );
};

Article.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Update the prop name to match the component prop
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired, // Add onImageClick to propTypes
};

export default Article;
