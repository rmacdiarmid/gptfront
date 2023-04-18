import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ image, title, preview }) => {
  return (
    <div className="article">
      <div className="article-img-container">
        <img src={image} alt="Article Image" />
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-preview">{preview}</p>
    </div>
  );
};

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default Article;
