import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Articles from './Articles';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      ID
      Image
      Title
      Preview
    }
  }
`;

const mockArticles = [
  {
    ID: '1',
    Image: 'https://example.com/sample-image-1.jpg',
    Title: 'Sample Title 1',
    Preview: 'Sample preview text 1...',
  },
  {
    ID: '2',
    Image: 'https://example.com/sample-image-2.jpg',
    Title: 'Sample Title 2',
    Preview: 'Sample preview text 2...',
  },
];

const mocks = [
  {
    request: {
      query: GET_ARTICLES,
    },
    result: {
      data: {
        articles: mockArticles,
      },
    },
  },
];

describe('Articles', () => {
  test('renders articles from the API', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Articles />
      </MockedProvider>
    );

    for (const article of mockArticles) {
      const titleElement = await screen.findByText(article.Title);
      expect(titleElement).toBeInTheDocument();
      expect(screen.getByAltText(article.Title)).toHaveAttribute('src', article.Image);
      expect(screen.getByText(article.Preview)).toBeInTheDocument();
    }
  });

  test('handles API errors', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_ARTICLES,
        },
        error: new Error('Error fetching articles'),
      },
    ];

    console.error = jest.fn();

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Articles />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
});
