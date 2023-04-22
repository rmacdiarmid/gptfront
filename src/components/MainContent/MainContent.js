import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './MainContent.css';
import Articles from '../Articles/Articles';

const MainContent = ({ children }) => {
  // Access data from the Redux store
  const someData = useSelector((state) => state.someReducer.someData);

  return (
    <div className="main-content">
      {children}
      <div>{someData}</div>
      <Articles />
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
