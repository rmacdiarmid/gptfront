import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOGS } from '../../apolloClient';

// Remove the id prop from the LogsList component
const LogsList = () => {
  // Remove the variables from the useQuery hook
  const { loading, error, data } = useQuery(GET_LOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Logs</h3>
      <ul>
        {Array.isArray(data.frontendLog)
          ? data.frontendLog.map((log) => (
              <li key={log.id}>
                <p>
                  {log.timestamp} - {log.message}
                </p>
              </li>
            ))
          : console.error('data.frontendLog is not an array:', data.frontendLog)}
      </ul>
    </div>
  );
};

export default LogsList;
