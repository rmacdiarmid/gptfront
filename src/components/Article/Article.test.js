import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Article from './Article';

const mockStore = configureMockStore();
const store = mockStore({
  article: {
    title: 'Sample Title',
  },
});

const defaultProps = {
  image: 'https://example.com/sample-image.jpg',
  title: 'Sample Title',
  preview: 'Sample preview text...',
};

describe('Article', () => {
  test('renders the article with given image, title, and preview', () => {
    render(
      <Provider store={store}>
        <Article {...defaultProps} />
      </Provider>
    );

    const imageElement = screen.getByAltText(defaultProps.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.image);

    const titleElement = screen.getByText(defaultProps.title);
    expect(titleElement).toBeInTheDocument();

    const previewElement = screen.getByText(defaultProps.preview);
    expect(previewElement).toBeInTheDocument();
  });
});
