import { combineReducers } from '@reduxjs/toolkit';
import promptReducer from './promptReducer';
import temperatureReducer from './temperatureReducer';
import lengthReducer from './lengthReducer';
import searchReducer from './searchReducer';
import activeNavLinkReducer from './activeNavLinkReducer';


const rootReducer = combineReducers({
  prompt: promptReducer,
  temperature: temperatureReducer,
  length: lengthReducer,
  search: searchReducer,
  activeNavLink: activeNavLinkReducer,
});

export default rootReducer;
