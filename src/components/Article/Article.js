import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';
import logger from '../../logger';

const Article = ({ image, title, preview }) => {
  logger.log(`Rendering article: ${title}`);

  return (
    <div className="article">
      <div className="article-img-container">
        <img src={image} alt={title} />
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
