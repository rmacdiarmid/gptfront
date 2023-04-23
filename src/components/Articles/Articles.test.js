import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Articles from './Articles';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

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

describe('Articles', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders articles from the API', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockArticles));
  
    render(<Articles />);
  
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith('/api/articles');
  
    for (const article of mockArticles) {
      const titleElement = await screen.findByText(article.Title); // Use article.Title
      expect(titleElement).toBeInTheDocument();
      expect(screen.getByAltText(article.Title)).toHaveAttribute('src', article.Image); // Use article.Image
      expect(screen.getByText(article.Preview)).toBeInTheDocument(); // Use article.Preview
    }
  });
  

  test('handles API errors', async () => {
    fetchMock.mockReject(new Error('Error fetching articles'));

    console.error = jest.fn();

    render(<Articles />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(console.error).toHaveBeenCalled();
  });
});
