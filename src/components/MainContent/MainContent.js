import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import Articles from '../Articles/Articles';
import logger from '../../logger';

const MainContent = ({ children }) => {
  // Use an effect to log when the component is rendered
  useEffect(() => {
    logger.log('MainContent component rendered');
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
