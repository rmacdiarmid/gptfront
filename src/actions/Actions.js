import { UPDATE_HERO_IMAGE } from './ActionTypes';

export const setSearchTerm = (searchTerm) => ({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
  });

  export const setActiveNavLink = (activeNavLink) => ({
    type: 'SET_ACTIVE_NAV_LINK',
    payload: activeNavLink,
  });

export const updateHeroImage = (imageUrl) => {
  return {
    type: UPDATE_HERO_IMAGE,
    payload: imageUrl,
  };
};

export const updateArticles = (articles) => ({
  type: 'UPDATE_ARTICLES',
  payload: articles,
});
