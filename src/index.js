import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the client
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <ApolloProvider client={client}> {/* Pass the client to ApolloProvider */}
    <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
