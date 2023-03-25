import axios from "axios";
import React, { useContext, useReducer } from "react";
import { fetch_cart } from "../utils/globalFunction";
import { priceReducer, productReducer } from "./reducers";

const AppContext = React.createContext();

const initialState = 0;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(priceReducer, initialState);
  const [productState, productDispatch] = useReducer(productReducer, []);

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

  const fetchProduct = async () => {
    try {
      // const url = `${process.env.REACT_APP_BASE_URL}/api/all/products`;
      const url = `http://localhost:5000/api/all/products`;
      const prodcut = await axios.get(url);

      // console.log("Product from context => ", prodcut.data);

      return productDispatch({
        type: "FETCH_ALL_PRODUCT",
        payload: prodcut.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const filterByCategory = async (filter) => {
    try {
      // const url = `${process.env.REACT_APP_BASE_URL}/api/all/products`;
      const url = `http://localhost:5000/api/all/products`;
      let prodcut = await axios.get(url);
      let resData;

      filter.forEach((element) => {        
        resData = prodcut.data.allProducts.filter((ele) => {          
          return element === ele.product_category;

        });
      });

      prodcut.data.allProducts = resData;
      console.log(prodcut.data);


      return productDispatch({
        type: "FILTERED_PRODUCT",
        payload: prodcut.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const totalQut = async () => {
    let cartData = await fetch_cart();
    let qut;
    if (cartData) {
      qut = cartData.length;
    } else {
      qut = 0;
    }

    return dispatch({
      type: "TOTAL_QUT",
      payload: qut,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        ...productState,
        updateSubTotal,
        totalQut,
        fetchProduct,
        filterByCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// useGlobalContext
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
