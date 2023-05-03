import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ image, title, preview, text, onImageClick }) => (
  <div>
    <img
      src={image}
      alt={title}
      style={{ width: '100%', cursor: 'pointer' }}
      onClick={onImageClick}
    />
    <h3>{title}</h3>
    <p>{preview}</p>
    <p>{text}</p>
  </div>
);

Article.propTypes = {
  image: PropTypes.string.isRequired, // Change this line
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default Article;
