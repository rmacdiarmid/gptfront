import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOGS } from '../../apolloClient';
import logger from '../../logger';


const LogsList = () => {
  logger.log('LogsList: Start fetching logs'); // Log before fetching logs
  const { loading, error, data } = useQuery(GET_LOGS);

  if (loading) {
    logger.log('LogsList: Loading logs');
    return <p>Loading...</p>;
  }
  if (error) {
    logger.log(`LogsList: Error fetching logs - ${error.message}`);
    return <p>Error: {error.message}</p>;
  }

  logger.log('LogsList: Fetching logs successful'); // Log after successful fetching

  return (
    <div>
      <h3>Logs</h3>
      <ul>
        {Array.isArray(data.frontendLogs)
          ? data.frontendLogs.map((log) => {
              logger.log(`LogsList: Rendering log ID ${log.id}`); // Log when rendering each log
              return (
                <li key={log.id}>
                  <p>
                    {log.timestamp} - {log.message}
                  </p>
                </li>
              );
            })
          : logger.error('LogsList: data.frontendLogs is not an array:', data.frontendLogs)}
      </ul>
    </div>
  );
};

export default LogsList;
