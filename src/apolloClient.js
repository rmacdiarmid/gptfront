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
