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
        <div id="task-list-container">
          <ArticleList />
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default App;
