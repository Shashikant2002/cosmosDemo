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

export const categoryProductReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        allCategoryProduct: action.payload,
      };

    default:
      return state;
  }
};

export const filterMultiCategoryProduct = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_MULTI_CATEGORY":
      return {
        ...state,
        multiCategoryPro: action.payload,
      };

    default:
      return state;
  }
};

export const registerUserHReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER_H":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export const loginUserHReducer = (state = { authorization: false }, action) => {
  switch (action.type) {
    case "lOGIN_BY_PHONE":
      console.log("Data", action?.payload?.token)
      if (action?.payload?.token) {
        return {
          ...state,
          login: action.payload,
          authorization: true,
        };
      } else {
        return {
          ...state,
          login: action.payload,
          authorization: false,
        };
      }

    default:
      return state;
  }
};
