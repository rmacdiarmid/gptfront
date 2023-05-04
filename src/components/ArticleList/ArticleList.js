import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';
import { setArticles } from '../../reducers/articlesReducer';
import Article from '../Article/Article';
import styles from './ArticleList.module.css';

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
    <div className={styles.articleList}>
      {articles.map((article) => (
        <Article
  key={article.id}
  article={article}
  onArticleImageClick={onArticleImageClick}
/>
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  onArticleImageClick: PropTypes.func.isRequired,
};

export default ArticleList;
