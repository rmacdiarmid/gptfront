import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Hero />
        <ArticleList /> {/* No need to pass the articles prop */}
        {/* Task list container; populate this container using the data from your API */}
        <div id="task-list-container" />
      </MainContent>
      <Footer />
    </>
  );
};

export default App;
