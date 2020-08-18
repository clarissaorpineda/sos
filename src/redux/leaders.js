import * as ActionTypes from './ActionTypes';

export const Leaders = (state = { error: null, leaders:[], isLoading: true}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {...state, error: null, leaders: action.payload, isLoading: false};

    case ActionTypes.LEADERS_FAILED:
      return {...state, leaders: [], isLoading: false, error: action.payload};

    case ActionTypes.LEADERS_LOADING:
        return { ...state, leaders: [], isLoading: true, error: null};

    default:
      return state;
  }
};