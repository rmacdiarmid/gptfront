import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import Articles from '../Articles/Articles';
import logger from '../../logger';

const MainContent = ({ children }) => {
  // Use an effect to log when the component is rendered
  useEffect(() => {
    try {
      logger.log('MainContent component rendered');
    } catch (error) {
      logger.log(`Error while logging MainContent component render: ${error}`);
    }
  }, []);

  return (
    <div className="main-content">
      {children}
      <Articles />
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
