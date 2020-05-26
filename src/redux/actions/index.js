import * as actionTypes from './types';

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { todo }
  };
};

export const completeTodo = (id, isCompleted) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: { id, isCompleted }
  };
};

export const updateTodo = (id, title) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: { id, title }
  };
};

export const deletoTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: { id }
  };
};

export const changeState = (state, id) => {
  return {
    type: actionTypes.CHANGE_STATE,
    payload: { state, id }
  };
};

export const changeFilterStatus = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER_STATUS,
    payload: { filter }
  };
}
;
export const changeFilterSearch = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER_SEARCH,
    payload: { filter }
  };
};
