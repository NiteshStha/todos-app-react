import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  currentState: 'add_item',
  id: null
};

const stateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STATE:
      return {
        ...state,
        currentState: action.payload.state,
        id: action.payload.id
      };
    default:
      return state;
  }
};

export default stateReducer;
