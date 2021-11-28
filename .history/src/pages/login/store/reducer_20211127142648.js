import * as actionTypes from './actionTypes'

const initState = {
  isAuth: false,
  user: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SYNC_STATE_INFO:
        return {
          isAuth: action.payload
        };
    default:
      return state;
  }
};
