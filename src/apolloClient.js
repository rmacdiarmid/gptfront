import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_API_URL + '/graphql' }),
  cache: new InMemoryCache(),
});

export default client;

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      id
      image
      title
      preview
    }
  }
`;

export const GET_LOGS = gql`
  query GetLogs {
    frontendLog {
      id
      message
      timestamp
    }
  }
`;



export const ADD_LOG = gql`
  mutation AddLog($message: String!, $timestamp: String!) {
    createFrontendLog(message: $message, timestamp: $timestamp) {
      id
      message
      timestamp
    }
  }
`;

export const UPDATE_LOG = gql`
  mutation UpdateLog($id: Int!, $message: String, $timestamp: String) {
    updateFrontendLog(id: $id, message: $message, timestamp: $timestamp) {
      id
      message
      timestamp
    }
  }
`;

export const DELETE_LOG = gql`
  mutation DeleteLog($id: Int!) {
    deleteFrontendLog(id: $id)
  }
`;

