import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import LogsList from '../../components/LogsList/LogsList';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../store';
import logger from '../../logger';


const App = () => {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  useEffect(() => {
    logger.log('Test log message');
  }, []);

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
          <ArticleList />
        </MainContent>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
