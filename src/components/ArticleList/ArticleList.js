import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';
import logger from '../../logger';

const ArticleList = () => {
  logger.log('ArticleList component loaded.');

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) {
    logger.log('Loading articles...');
    return <p>Loading...</p>;
  }
  if (error) {
    logger.log(`Error loading articles: ${error.message}`);
    return <p>Error :(</p>;
  }

  const { articles } = data;
  logger.log('Articles loaded successfully.');

  return (
    <div className="article-container">
      <h2>Featured Articles</h2>
      <div className="articles">
        {articles.map(({ id, image, title, preview }) => (
          <Article
            key={id}
            image={image}
            title={title}
            preview={preview}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
