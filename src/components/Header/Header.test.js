import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureStore([]);
const store = mockStore({});

test('renders header with navigation links', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('Task List')).toBeInTheDocument();
  expect(screen.getByText('Article Generator')).toBeInTheDocument();
});

test('navigation link click', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  userEvent.click(screen.getByText('Home'));
  // You need to add a proper assertion here based on your app's routing behavior.
});
