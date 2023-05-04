import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../Button/Button'; // Import MyButton component
import classes from './Article.module.css';
import styles from '../Button/Button.module.css';

const Article = ({ article, onArticleImageClick }) => {
  const { image, title, text } = article;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.article}>
          <div className={classes.articleImgContainer}>
              <img
              src={image}
              alt={title}
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => onArticleImageClick(article)}
              />
          </div>
          <h3 className={classes.articleTitle}>{title}</h3>
          <div
            className={`${classes.articleContent} ${isExpanded ? classes.expanded : ''}`}
          >
            <p className={classes.articleText}>{text}</p>
            {!isExpanded && <div className={classes.gradientOverlay}></div>}
          </div>
        <div className={classes.buttonContainer}>
          <MyButton className={styles.button} onClick={handleReadMoreClick}>
          {isExpanded ? 'Read less' : 'Read more'}
          </MyButton>
        </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onArticleImageClick: PropTypes.func.isRequired,
};

export default Article;
