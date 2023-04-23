import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';

const ArticleList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { articles } = data;

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
