import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import logger from '../../logger';

const MainContent = ({ children }) => {
  const [logs, setLogs] = useState([]);

  // Use an effect to log when the component is rendered and fetch the latest logs
  useEffect(() => {
    try {
      logger.log('MainContent component rendered');
      const latestLogs = logger.getLatestLogs();
      // Do something with latestLogs
      setLogs(latestLogs);
    } catch (error) {
      logger.log(`Error while logging MainContent component render: ${error}`);
    }
  }, []);

  return (
    <div className="main-content">
      {children}
      <div className="logs">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
