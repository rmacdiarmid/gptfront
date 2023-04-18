import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);

useEffect(() => {
  const fetchArticles = async () => {
    const response = await fetch('/api/articles');
    const data = await response.json();
    setArticles(data);
  };

  fetchArticles();
}, []);


  return (
    <>
      <Header />
      <MainContent>
        <Hero />
        <ArticleList articles={articles} />
        {/* Task list container; populate this container using the data from your API */}
        <div id="task-list-container" />
      </MainContent>
      <Footer />
    </>
  );
};

export default App;
