import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import LogsList from '../../components/LogsList/LogsList';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import CreateArticleForm from '../../components/CreateArticleForm/CreateArticleForm';

const App = () => {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  const activeNavLink = useSelector((state) => state.activeNavLink);


  return (
    <Provider store={store}>
      <>
        <Header />
        <MainContent>
          <Hero />
          <button onClick={toggleLogs}>
            {showLogs ? 'Hide Logs' : 'Show Logs'}
          </button>
          {showLogs && <LogsList />}
          {activeNavLink === 'article generator' ? <CreateArticleForm /> : <ArticleList />}
          <ArticleList />
        </MainContent>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
