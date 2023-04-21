import { configureStore } from '@reduxjs/toolkit';
import { promptReducer, temperatureReducer, lengthReducer } from './reducers';

const rootReducer = {
  prompt: promptReducer,
  temperature: temperatureReducer,
  length: lengthReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
