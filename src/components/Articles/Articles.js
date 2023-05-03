import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Article from '../Article/Article';
import { setArticles } from '../../reducers/articlesReducer';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';

const getImageUrl = (imageName) => {
  if (imageName) {
    return process.env.REACT_APP_API_URL + '/uploads/' + imageName;
  }
  return '';
};

const Articles = ({ onImageClick }) => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const { data, error, loading } = useQuery(GET_ARTICLES);

  useEffect(() => {
    if (data && data.articles) {
      console.log('Fetched articles:', data.articles); // Add this line
      dispatch(setArticles(data.articles));
    }
  }, [data, dispatch]);

  if (error) {
    console.error('Error fetching articles:', error);
  }

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          console.log('Article from Redux store:', article); // Add this line
          return (
            <li key={article.id}>
              <Article
                image={getImageUrl(article.image)}
                title={article.title}
                preview={article.preview}
                text={article.text}
                onImageClick={onImageClick}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Articles.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default Articles;
