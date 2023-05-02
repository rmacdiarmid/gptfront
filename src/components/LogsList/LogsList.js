import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOGS } from '../../apolloClient';
import logger from '../../logger';

const LogsList = () => {
  const { loading, error, data } = useQuery(GET_LOGS);
  const [latestLogs, setLatestLogs] = useState([]);

  useEffect(() => {
    if (data && data.frontendLogs) {
      setLatestLogs(data.frontendLogs.slice(-5));
    }
  }, [data]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return date.toLocaleString('en-US', options);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h3>Latest Logs</h3>
      <ul>
        {Array.isArray(latestLogs)
          ? latestLogs.map((log) => {
              return (
                <li key={log.id}>
                  <p>
                    {formatTimestamp(log.timestamp)} - {log.message}
                  </p>
                </li>
              );
            })
          : logger.error('LogsList: latestLogs is not an array:', latestLogs)}
      </ul>
    </div>
  );
};

export default LogsList;
