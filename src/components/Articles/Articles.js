import React from 'react';
import useArticles from '../../hooks/useArticles';
import Article from '../Article/Article';
import logger from '../../logger';

const Articles = () => {
  const articles = useArticles();

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
          <li key={article.ID}>
            <Article
              image={getImageUrl(article.Image)}
              title={article.Title}
              preview={article.Preview}
              text={article.Text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
