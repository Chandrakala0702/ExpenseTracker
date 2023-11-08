import * as actionTypes from "../actionTypes/dashboardActionTypes";

const initialState = {
  categoryData: [
    {
      name: "shirt",
      type: "ionicon",
      iconColor: "#DABB4F",
      innerCircleColor: "#FBF7EA",
      text: "Clothing",
      progress: 0.4,
    },
    {
      name: "lipstick",
      type: "material-community",
      iconColor: "#5281AC",
      innerCircleColor: "#EAF0F5",
      text: "Beauty",
      progress: 0.2,
    },
    {
      name: "volunteer-activism",
      type: "material-icon",
      iconColor: "#EF9E38",
      innerCircleColor: "#FDF3E7",
      text: "Health & Fitness",
      progress: 1,
    },
    {
      name: "restaurant",
      type: "material-icon",
      iconColor: "#76A6D3",
      innerCircleColor: "#EFF4FA",
      text: "Food",
      progress: 0.5,
    },
    {
      name: "home",
      type: "material-icon",
      iconColor: "#F0D0D4",
      innerCircleColor: "#FBF4F4",
      text: "Housing",
      progress: 0.7,
    },
    {
      name: "camera",
      type: "font-awesome",
      iconColor: "#5ACCD1",
      innerCircleColor: "#EBF9F9",
      text: "Entertainment",
      progress: 0.2,
    },
  ],
  selectCategory: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectCategory: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
