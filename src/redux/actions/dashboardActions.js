import * as actionTypes from "../actionTypes/dashboardActionTypes";

export const setSelectedCategory = (category) => {
  return {
    type: actionTypes.SET_SELECTED_CATEGORY,
    payload: category,
  };
};
