import React from 'react';
import { useSelector } from 'react-redux';
import Article from '../Article/Article'; // Import the Article component
import './ArticleList.css';

const ArticleList = () => {
  const articles = useSelector((state) => state.articles);

  console.log("Articles from Redux store:", articles); // Add this console log

  if (!articles) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article // Use the Article component
          key={article.id}
          imageUrl={article.image}
          title={article.title}
          preview={article.preview}
          text={article.text}
          onImageClick={() => console.log(`Image clicked: ${article.image}`)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
