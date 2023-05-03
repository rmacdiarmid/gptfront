import { combineReducers } from '@reduxjs/toolkit';
import promptReducer from './promptReducer';
import temperatureReducer from './temperatureReducer';
import lengthReducer from './lengthReducer';
import searchReducer from './searchReducer';
import activeNavLinkReducer from './activeNavLinkReducer';
import updateHeroImageReducer from './updateHeroImageReducer';
import articlesReducer from './articlesReducer'; // Import the articlesReducer

const rootReducer = combineReducers({
  prompt: promptReducer,
  temperature: temperatureReducer,
  length: lengthReducer,
  search: searchReducer,
  activeNavLink: activeNavLinkReducer,
  heroImage: updateHeroImageReducer,
  articles: articlesReducer, // Add the articlesReducer
});

export default rootReducer;
