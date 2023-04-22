import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import ArticleList from '../../components/ArticleList/ArticleList';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../store';


const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <MainContent>
          <Hero />
            <ArticleList />
        </MainContent>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
