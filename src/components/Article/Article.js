import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, onArticleImageClick }) => {
  const { image, title, preview, text } = article;

  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={() => onArticleImageClick(article)}
      />
      <h3>{title}</h3>
      <p>{preview}</p>
      <p>{text}</p>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onArticleImageClick: PropTypes.func.isRequired,
};

export default Article;
