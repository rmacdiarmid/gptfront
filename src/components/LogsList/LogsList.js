import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_LOGS } from '../../apolloClient';

const LogsList = ({ logs }) => {
  const { loading, error, data } = useQuery(GET_LOGS);
  const [latestLogs, setLatestLogs] = useState([]);

  useEffect(() => {
    if (logs) {
      setLatestLogs(logs.slice(-5));
    } else if (data && data.frontendLogs) {
      setLatestLogs(data.frontendLogs.slice(-5));
    }
  }, [logs, data]);

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
          : null}
      </ul>
    </div>
  );
};

LogsList.propTypes = {
  logs: PropTypes.array,
};

LogsList.defaultProps = {
  logs: null,
};

export default LogsList;
