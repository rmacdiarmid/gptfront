import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Article.css';

const Article = ({ image, title, preview }) => {
  return (
    <div className="article">
      <div className="article-img-container">
      <img src={image} alt={image} />
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

const mapStateToProps = (state) => ({
  title: state.article.title,
});

export default connect(mapStateToProps)(Article);
