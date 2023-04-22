import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MainContent from './MainContent';

const mockStore = configureStore([]);

describe('MainContent', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      someReducer: {
        someData: 'Your data',
      },
    });
  });

  test('renders main content with children', () => {
    render(
      <Provider store={store}>
        <MainContent>
          <div>Test Child Component</div>
        </MainContent>
      </Provider>
    );

    // Your assertions here
  });
});
