import React, { useState, useEffect } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetch("/api/articles")
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched articles:", data);
          setArticles(data);
        })
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <div>
        <h2>Articles</h2>
        <ul>
        {articles.map((article) => (
  <li key={article.ID}>
    <h3>{article.Title}</h3>
    <img src={article.Image} alt={article.Title} />
    <p>{article.Preview}</p>
  </li>
))}
        </ul>
      </div>
    );
};

export default Articles;
