import { LOG_IN, LOG_OUT } from "../actionTypes";

const initialState = {
  userName: 'Guest'
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return {
        userName: 'Dan Abramov'
      };
    case LOG_OUT:
      return {
        userName: 'Back'
      };
    default:
      return state;
  }
};