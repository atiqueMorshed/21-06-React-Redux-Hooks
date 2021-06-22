import accountActionTypes from "./account.types";

export const depositMoney = (amount) => {
  return (dispatch) =>
    dispatch({
      type: accountActionTypes.DEPOSIT,
      payload: amount,
    });
};

export const withdrawMoney = (amount) => {
  return (dispatch) =>
    dispatch({
      type: accountActionTypes.WITHDRAW,
      payload: amount,
    });
};
