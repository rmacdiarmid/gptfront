import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';
import { setArticles } from '../../reducers/articlesReducer';
import Article from '../Article/Article';
import './ArticleList.css';

const ArticleList = ({ onArticleImageClick }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const { loading, error, data } = useQuery(GET_ARTICLES);

  useEffect(() => {
    console.log('GraphQL data:', data);
    if (data) {
      dispatch(setArticles(data.articles));
    }
  }, [data, dispatch]);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article
          key={article.id}
          image={article.image}
          title={article.title}
          preview={article.preview}
          text={article.text}
          onImageClick={() => onArticleImageClick(article.image)}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  onArticleImageClick: PropTypes.func.isRequired,
};

export default ArticleList;
