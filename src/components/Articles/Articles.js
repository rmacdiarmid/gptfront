import React from 'react';
import useArticles from '../../hooks/useArticles';
import Article from '../Article/Article';
import cleanImageName from '../../utils/cleanImageName';
import logger from '../../logger';

const Articles = () => {
  const articles = useArticles();
  const imagePath = process.env.REACT_APP_IMAGE_PATH;

  const getImageUrl = (imageName) => {
    try {
      const cleanedImageName = cleanImageName(imageName);
      const imageUrl = `${imagePath}${cleanedImageName}`;
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
