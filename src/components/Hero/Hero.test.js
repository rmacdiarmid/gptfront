import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import Hero from './Hero';
import { setSearchTerm } from '../../actions/Actions';
import '@testing-library/jest-dom/extend-expect';


const mockStore = configureStore([]);

describe('Hero', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      searchTerm: '',
    });
  });

  test('renders search input and button', () => {
    render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search for articles...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('updates input value and dispatches setSearchTerm action on form submit', () => {
    store.dispatch = jest.fn();
    const searchTerm = 'Sample search term';

    render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search for articles...');
    const searchButton = screen.getByRole('button', { name: /search/i });

    userEvent.type(searchInput, searchTerm);
    expect(searchInput).toHaveValue(searchTerm);

    fireEvent.submit(searchButton);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setSearchTerm(searchTerm));
  });
});
