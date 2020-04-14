import { combineReducers } from 'redux';

// pastBudget holds the previous budget for the election
const pastBudget = (state = '', action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  pastBudget,
});