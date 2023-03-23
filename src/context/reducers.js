export const reducer = (state, action) => {
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
