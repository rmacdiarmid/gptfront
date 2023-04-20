import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the client

ReactDOM.render(
  <ApolloProvider client={client}> {/* Pass the client to ApolloProvider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
