import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  status: 'in_process',
  searchTerm: ''
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER_STATUS:
      return { ...state, status: action.payload.filter };
    case actionTypes.CHANGE_FILTER_SEARCH:
      return { ...state, searchTerm: action.payload.filter };
    default:
      return state;
  }
};

export default filterReducer;
