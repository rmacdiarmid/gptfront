import React from 'react';
import PropTypes from 'prop-types';
import './ArticleList.css';
import Article from '../Article/Article';


const ArticleList = ({ articles }) => {
  return (
    <div className="article-container">
      <h2>Featured Articles</h2>
      <div className="articles">
        {articles.map((article) => (
          <Article
            key={article.id}
            image={article.image}
            title={article.title}
            preview={article.preview}
          />
        ))}
      </div>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ArticleList;
