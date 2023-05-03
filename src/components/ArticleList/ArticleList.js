import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../apolloClient';
import { setArticles } from '../../reducers/articlesReducer';
import Article from '../Article/Article'; // Import the Article component
import './ArticleList.css';

const ArticleList = () => {
  const dispatch = useDispatch(); // Add this line
  const articles = useSelector((state) => state.articles);

  const { loading, error, data } = useQuery(GET_ARTICLES);

  useEffect(() => {
    console.log('GraphQL data:', data);
    if (data) {
      dispatch(setArticles(data.articles)); // Add this line
    }
  }, [data, dispatch]); // Add dispatch to dependency array

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
          image={article.image} // Change this line
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