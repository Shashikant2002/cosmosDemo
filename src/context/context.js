import axios from "axios";
import React, { useContext, useReducer } from "react";
import { fetch_cart } from "../utils/globalFunction";
import {
  priceReducer,
  productReducer,
  categoryProductReducer,
} from "./reducers";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(priceReducer, 0);
  const [productState, productDispatch] = useReducer(productReducer, []);
  const [productByCate, productByCateDispatch] = useReducer(
    categoryProductReducer,
    []
  );

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
      const url = `${process.env.REACT_APP_BASE_URL}/api/all/products`;
      // const url = `http://localhost:5000/api/all/products`;
      const prodcut = await axios.get(url);

      return productDispatch({
        type: "FETCH_ALL_PRODUCT",
        payload: prodcut.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const searchProduct = async (searchText) => {
    try {
      if (searchText === "") {
        return fetchProduct();
      }
      const url = `${process.env.REACT_APP_BASE_URL}/api/search/in/products/?search=${searchText}`;
      // const url = `http://localhost:5000//api/search/in/products/?search=${searchText}`;
      const searchPro = await axios.get(url);

      console.log(url)

      // console.log("Product from context => ", searchPro.data, productState.allProduct.allProducts);

      productState.allProduct.allProducts = searchPro.data;

      // console.log(productState);

      return productDispatch({
        type: "FETCH_ALL_SEARCH_PRODUCT",
        payload: productState.allProduct,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const filterByCategory = async (filter) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/filter/products/?by_category=${filter}`;
      // const url = `http://localhost:5000/api/all/products`;
      let prodcut = await axios.get(url);
      // console.log(prodcut);

      return productByCateDispatch({
        type: "FILTER_BY_CATEGORY",
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
        ...productByCate,
        updateSubTotal,
        totalQut,
        fetchProduct,
        filterByCategory,
        searchProduct,
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
