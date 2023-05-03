// reducers/updateHeroImage.js
import { UPDATE_HERO_IMAGE } from '../actions/ActionTypes';

const initialState = 'REACT_APP_HERO_IMAGE_URL';

const updateHeroImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HERO_IMAGE:
      return {
        ...state,
        heroImage: action.payload,
      };

    default:
      return state;
  }
};

export default updateHeroImageReducer;
