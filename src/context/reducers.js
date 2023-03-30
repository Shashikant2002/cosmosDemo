export const priceReducer = (state, action) => {
  switch (action.type) {
    case "SUB_PRICE":
      return {
        ...state,
        subPrice: action.payload,
      };

    case "TOTAL_QUT":
      return {
        ...state,
        totalQuantity: action.payload,
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_SEARCH_PRODUCT":
    case "FETCH_ALL_PRODUCT":
    case "FILTERED_PRODUCT":
      return {
        ...state,
        allProduct: action.payload,
      };

    default:
      return state;
  }
};
