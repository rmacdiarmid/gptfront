// App.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import LogsList from '../../components/LogsList/LogsList';
import './App.css';
import CreateArticleForm from '../../components/CreateArticleForm/CreateArticleForm';

const App = () => {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  const activeNavLink = useSelector((state) => state.activeNavLink);
  const heroImage = useSelector((state) => state.heroImage);

  return (
    <Provider store={store}>
      <>
        <Header />
        <MainContent>
          <Hero imageUrl={heroImage} />
          <button onClick={toggleLogs}>
            {showLogs ? 'Hide Logs' : 'Show Logs'}
          </button>
          {showLogs && <LogsList />}
          {activeNavLink === 'article generator' ? <CreateArticleForm /> : <ArticleList />}
        </MainContent>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
