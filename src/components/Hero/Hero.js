import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Hero from './Hero';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const store = mockStore({
  search: {
    searchTerm: '',
  },
});

store.dispatch = jest.fn();

describe('Hero', () => {
  test('updates input value and dispatches setSearchTerm action on form submit', () => {
    render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );

    const searchTerm = 'Sample search term';
    const searchInput = screen.getByPlaceholderText('Search articles...');
    const searchButton = screen.getByRole('button', { name: /search/i });

    userEvent.type(searchInput, searchTerm);
    expect(searchInput).toHaveValue(searchTerm);

    fireEvent.submit(searchButton);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});

// Hero.js
export default Hero;

