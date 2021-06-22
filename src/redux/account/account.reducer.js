import accountActionTypes from "./account.types";

const INITIAL_STATE = 0;

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accountActionTypes.DEPOSIT:
      return state + action.payload;

    case accountActionTypes.WITHDRAW:
      return state - action.payload;

    default:
      return state;
  }
};

export default accountReducer;
