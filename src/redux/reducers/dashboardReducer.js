import * as actionTypes from "../actionTypes/dashboardActionTypes";

const initialState = {
  overallSpentPercentage: 0,
  overallAmountLimit: 0,
  overAllSpentAmount: 0,
  categoryData: [
    {
      id: 1,
      name: "shirt",
      type: "ionicon",
      iconColor: "#DABB4F",
      innerCircleColor: "#FBF7EA",
      text: "Clothing",
      spentAmountLimit: 2000,
      spentAmount: 500,
    },
    {
      id: 2,
      name: "lipstick",
      type: "material-community",
      iconColor: "#5281AC",
      innerCircleColor: "#EAF0F5",
      text: "Beauty",
      spentAmountLimit: 2000,
      spentAmount: 1500,
    },
    {
      id: 3,
      name: "volunteer-activism",
      type: "material-icon",
      iconColor: "#EF9E38",
      innerCircleColor: "#FDF3E7",
      text: "Health & Fitness",
      spentAmountLimit: 2000,
      spentAmount: 300,
    },
    {
      id: 4,
      name: "restaurant",
      type: "material-icon",
      iconColor: "#76A6D3",
      innerCircleColor: "#EFF4FA",
      text: "Food",
      spentAmountLimit: 2000,
      spentAmount: 750,
    },
    {
      id: 5,
      name: "home",
      type: "material-icon",
      iconColor: "#F0D0D4",
      innerCircleColor: "#FBF4F4",
      text: "Housing",
      spentAmountLimit: 2000,
      spentAmount: 1000,
    },
    {
      id: 6,
      name: "camera",
      type: "font-awesome",
      iconColor: "#5ACCD1",
      innerCircleColor: "#EBF9F9",
      text: "Entertainment",
      spentAmountLimit: 2000,
      spentAmount: 1750,
    },
  ],
  selectedCategory: null,
  spentLimitData: [
    {
      id: 2,
      name: "lipstick",
      type: "material-community",
      trackColor: "#5281AC",
      text: "Beauty",
      innerTrackColor: "#EAF0F5",
      spentAmountLimit: 2000,
    },

    {
      id: 5,
      name: "home",
      type: "material-icon",
      trackColor: "#F0D0D4",
      text: "Housing",
      innerTrackColor: "#FBF4F4",
      spentAmountLimit: 2000,
    },
    {
      id: 1,
      name: "shirt",
      type: "ionicon",
      trackColor: "#DABB4F",
      text: "Clothing",
      innerTrackColor: "#FBF7EA",
      spentAmountLimit: 2000,
    },
    {
      id: 4,
      name: "restaurant",
      type: "material-icon",
      trackColor: "#76A6D3",
      text: "Food",
      innerTrackColor: "#EFF4FA",
      spentAmountLimit: 2000,
    },
    {
      id: 3,
      name: "volunteer-activism",
      type: "material-icon",
      trackColor: "#EF9E38",
      text: "Health & Fitness",
      innerTrackColor: "#FDF3E7",
      spentAmountLimit: 2000,
    },
    {
      id: 6,
      name: "camera",
      type: "font-awesome",
      trackColor: "#5ACCD1",
      text: "Entertainment",
      innerTrackColor: "#EBF9F9",
      spentAmountLimit: 2000,
    },
  ],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory:
          state.selectedCategory &&
          action.payload.id == state.selectedCategory.id
            ? null
            : action.payload,
      };
    case actionTypes.CALCULATE_OVERALL_SPENDING:
      const overallAmountLimit = state.categoryData.reduce(
        (total, category) => total + category.spentAmountLimit,
        0
      );
      const overAllSpentAmount = state.categoryData.reduce(
        (total, category) => total + category.spentAmount,
        0
      );
      const overallSpentPercentage = parseFloat(
        (overAllSpentAmount / overallAmountLimit) *
        100
      ).toFixed(0);
      return {
        ...state,
        overallAmountLimit,
        overAllSpentAmount,
        overallSpentPercentage,
      };
    case actionTypes.SET_NEW_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
      };
    case actionTypes.SET_NEW_SPENT_LIMIT_DATA:
      return {
        ...state,
        spentLimitData: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
