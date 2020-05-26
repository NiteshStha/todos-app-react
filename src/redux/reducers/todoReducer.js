import { v4 as uuid } from 'uuid';

import * as actionTypes from '../actions/types';

const INITIAL_STATE = [
  {
    id: uuid(),
    title: 'Eating Mo: Mo:',
    isCompleted: true
  },
  {
    id: uuid(),
    title: 'Playing Apex',
    isCompleted: false
  }
];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload.todo];
    case actionTypes.COMPLETE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isCompleted: action.payload.isCompleted };
        }
        return { ...item };
      });
    case actionTypes.UPDATE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }
        return { ...item };
      });
    case actionTypes.DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
