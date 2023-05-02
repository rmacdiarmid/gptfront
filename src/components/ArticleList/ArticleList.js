import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';
import logger from '../../logger';

const ArticleList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    logger.log(`Error loading articles: ${error.message}`);
    return <p>Error :(</p>;
  }

  const { articles } = data;

  return (
    <div className="article-container">
      <h2>Featured Articles</h2>
      <div className="articles">
        {articles.map(({ id, image, title, preview, text }) => (
          <Article
            key={id}
            image={image}
            title={title}
            preview={preview}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
