import * as actionTypes from "../actionTypes/dashboardActionTypes";

export const setSelectedCategory = (category) => {
  return {
    type: actionTypes.SET_SELECTED_CATEGORY,
    payload: category,
  };
};

export const updateSelectedCategory = (category) => {
  return {
    type: actionTypes.UPDATE_SELECTED_CATEGORY,
    payload: category,
  };
};

export const calculateOverallSpending = () => {
  return {
    type: actionTypes.CALCULATE_OVERALL_SPENDING,
  };
};

export const setNewSpentLimitData = (data) => {
  return {
    type: actionTypes.SET_NEW_SPENT_LIMIT_DATA,
    payload: data,
  };
};

export const setNewCategoryData = (data) => {
  return {
    type: actionTypes.SET_NEW_CATEGORY_DATA,
    payload: data,
  };
};
