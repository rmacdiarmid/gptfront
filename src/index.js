import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the client
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import './index.css'; // Import the index.css file
import logger from './logger'; // Import the logger

logger.log('Initializing React App');

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

logger.log('React App initialized');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((result) => {
  logger.log(`Web Vitals Result: ${JSON.stringify(result)}`);
});
