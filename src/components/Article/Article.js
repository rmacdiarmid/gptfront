import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ image, title, preview, text }) => {
  return (
    <div className="article">
      <div className="article-img-container">
        <img src={image} alt={title} />
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-preview">{preview}</p>
      <p className="article-text">{text}</p>
    </div>
  );
};

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
