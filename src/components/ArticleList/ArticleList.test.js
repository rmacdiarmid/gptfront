import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ArticleList from './ArticleList';
import { GET_ARTICLES } from '../../apolloClient';

const mockArticles = [
  {
    id: '1',
    image: 'https://example.com/sample-image-1.jpg',
    title: 'Sample Title 1',
    preview: 'Sample preview text 1...',
  },
  {
    id: '2',
    image: 'https://example.com/sample-image-2.jpg',
    title: 'Sample Title 2',
    preview: 'Sample preview text 2...',
  },
];

const mocks = [
  {
    request: {
      query: GET_ARTICLES,
    },
    result: {
      data: { articles: mockArticles },
    },
  },
];

const mockStore = configureMockStore()({}); // You can provide initial state if needed

describe('ArticleList', () => {
    test('renders articles from the GraphQL query', async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={mockStore}>
            <ArticleList />
          </Provider>
        </MockedProvider>
      );
  
      expect(screen.getByText('Loading...')).toBeInTheDocument();
  
      await waitFor(() => {
        return Promise.all([
          expect(screen.getByText(/Featured Articles/i)).toBeInTheDocument(),
          expect(screen.getByText(mockArticles[0].title)).toBeInTheDocument(),
          expect(screen.getByText(mockArticles[0].preview)).toBeInTheDocument(),
          expect(screen.getByText(mockArticles[1].title)).toBeInTheDocument(),
          expect(screen.getByText(mockArticles[1].preview)).toBeInTheDocument(),
        ]);
      });
    });
  });