import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeroImage } from '../../actions/Actions';
import './MainContent.css';
import logger from '../../logger';
import ArticleList from '../ArticleList/ArticleList';
import CreateArticleForm from '../CreateArticleForm/CreateArticleForm';
import LogsList from '../LogsList/LogsList';

const MainContent = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const dispatch = useDispatch();
  const activeNavLink = useSelector((state) => state.activeNavLink);
  const showLogs = useSelector((state) => state.showLogs);

  useEffect(() => {
    try {
      logger.log('MainContent component rendered');
      const latestLogs = logger.getLatestLogs();
      setLogs(latestLogs);
    } catch (error) {
      logger.log(`Error while logging MainContent component render: ${error}`);
    }
  }, []);

  const onArticleImageClick = (imageUrl) => {
    dispatch(updateHeroImage(imageUrl));
  };

  return (
    <div className="main-content">
      {React.Children.map(children, (child) => {
        if (child === null) {
          return null;
        }

        return child;
      })}
      {activeNavLink === 'article generator' ? (
        <CreateArticleForm />
      ) : (
        <ArticleList onArticleImageClick={onArticleImageClick} />
      )}
      {showLogs && <LogsList logs={logs} />}
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
