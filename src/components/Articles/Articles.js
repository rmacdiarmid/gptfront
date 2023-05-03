import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Article from '../Article/Article';
import logger from '../../logger';
import { setArticles } from '../../reducers/articlesReducer';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';

const Articles = ({ onImageClick }) => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const { data, error, loading } = useQuery(GET_ARTICLES);

  useEffect(() => {
    if (data && data.articles) {
      dispatch(setArticles(data.articles));
    }
  }, [data, dispatch]);

  if (error) {
    console.error('Error fetching articles:', error);
  }

  if (loading) {
    return <p>Loading articles...</p>;
  }

  const getImageUrl = async (imageName) => {
    try {
      // Fetch the IMAGE_BASE_URL from the backend
      const imageBaseUrl = process.env.REACT_APP_API_URL + '/graphql/get-image-base-url';
      const response = await fetch(imageBaseUrl);
      const baseUrl = await response.text();

      const imageUrl = `${baseUrl}${imageName}`;
      return imageUrl;
    } catch (error) {
      logger.log(`Error in getImageUrl: ${error}`);
    }
  };

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Article
              image={getImageUrl(article.image)}
              title={article.title}
              preview={article.preview}
              text={article.text}
              onImageClick={onImageClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Articles.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default Articles;
