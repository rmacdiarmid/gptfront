import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { promptReducer, temperatureReducer, lengthReducer } from './reducers';

const rootReducer = combineReducers({
  prompt: promptReducer,
  temperature: temperatureReducer,
  length: lengthReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
