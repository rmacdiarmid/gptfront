import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import Articles from '../Articles/Articles';

const MainContent = ({ children }) => {
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
