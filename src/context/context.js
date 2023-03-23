import React, { useContext, useReducer } from "react";
import { fetch_cart } from "../utils/globalFunction";
import { reducer } from "./reducers";

const AppContext = React.createContext();

const initialState = 0;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateSubTotal = async () => {
    let cartData = fetch_cart();
    let subPricecal = 0;

    let arr = [];
    await cartData.forEach((element) => {
      arr.push(element.changeQut * element.data.product_sale_price);
    });

    arr.forEach((element) => {
      subPricecal += element;
    });

    return dispatch({
      type: "SUB_PRICE",
      payload: subPricecal,
    });
  };

  const totalQut = async () => {
    let cartData = await fetch_cart();
    let qut = cartData.length;

    return dispatch({
      type: "TOTAL_QUT",
      payload: qut,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateSubTotal, totalQut }}>
      {children}
    </AppContext.Provider>
  );
};

// useGlobalContext
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
