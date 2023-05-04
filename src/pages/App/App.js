import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from '../../components/MainContent/MainContent';
import Hero from '../../components/Hero/Hero';
import LogsList from '../../components/LogsList/LogsList';
import MyButton from '../../components/Button/Button';
import styles from '../../components/Button/Button.module.css';
import './App.css';

const App = () => {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  const heroImage = useSelector((state) => state.heroImage);

  return (
    <Provider store={store}>
      <Header />
      <MainContent>
        <Hero imageUrl={heroImage} />
      </MainContent>
      <MyButton className={`${styles.button} ${styles.logsButton}`} onClick={toggleLogs}>
        {showLogs ? 'Hide Logs' : 'Show Logs'}
      </MyButton>
      {showLogs && <LogsList />}
      <Footer />
    </Provider>
  );
};

export default App;
