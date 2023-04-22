import { combineReducers } from '@reduxjs/toolkit';
import promptReducer from './promptReducer';
import temperatureReducer from './temperatureReducer';
import lengthReducer from './lengthReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  prompt: promptReducer,
  temperature: temperatureReducer,
  length: lengthReducer,
  search: searchReducer,
});

export default rootReducer;
