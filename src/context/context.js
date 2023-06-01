import axios from "axios";
import React, { useContext, useReducer } from "react";
import { fetch_cart } from "../utils/globalFunction";
import {
  priceReducer,
  productReducer,
  categoryProductReducer,
  filterMultiCategoryProduct,
  registerUserHReducer,
} from "./reducers";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(priceReducer, 0);
  const [productState, productDispatch] = useReducer(productReducer, []);
  const [productByCate, productByCateDispatch] = useReducer(
    categoryProductReducer,
    []
  );
  const [filterMultiCategory, filterMultiCategoryDispatch] = useReducer(
    filterMultiCategoryProduct,
    []
  );

  const [register, registerDispatch] = useReducer(registerUserHReducer);
  const [verifyRegUser, verifyRegUserDispatch] =
    useReducer(registerUserHReducer);
  const [login, loginDispatch] = useReducer(registerUserHReducer);

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
      const url = `${process.env.REACT_APP_BASE_URL}api/all/products`;
      // const url = `http://localhost:5000/api/all/products`;
      const prodcut = await axios.get(url);

      console.log(prodcut);

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
      const url = `${process.env.REACT_APP_BASE_URL}api/search/in/products/?search=${searchText}`;
      // const url = `http://localhost:5000//api/search/in/products/?search=${searchText}`;
      const searchPro = await axios.get(url);

      // console.log(url);

      // console.log("Product from context => ", searchPro.data, productState.allProduct.allProducts);

      productState.allProduct.allProducts = searchPro.data;

      console.log(productState);

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
      const url = `${process.env.REACT_APP_BASE_URL}api/filter/products/?by_category=${filter}`;
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

  const filterByMultiCategory = async (filter) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/filter/products/multi_category`;

      const config = {
        header: { "Content-Type": "application/json" },
      };
      const prodcut = await axios.post(url, { category: filter }, config);
      // console.log(prodcut);
      // console.log(productState.allProduct.allProducts);

      productState.allProduct.allProducts = prodcut.data.allProducts;

      return filterMultiCategoryDispatch({
        type: "FILTER_BY_MULTI_CATEGORY",
        payload: productState,
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

  const registerUser = async (username, phoneNumber) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/user/register`;
      const userCreate = await axios.post(
        url,
        { username: username, phone_number: phoneNumber },
        { withCredentials: true }
      );

      console.log("userCreate => ",userCreate);

      return registerDispatch({
        type: "REGISTER_USER_H",
        payload: userCreate.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const verifyRegUSer = async (otp) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/user/register_verify`;
      const userCreate = await axios.post(
        url,
        { otp },
        { withCredentials: true }
      );

      return verifyRegUserDispatch({
        type: "VERIFY_REG_USER",
        payload: userCreate?.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const loginByNumber = async (phoneNumber) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/user/login_by_number`;
      const login = await axios.post(
        url,
        { phone_number: phoneNumber },
        { withCredentials: true }
      );

      // console.log(login);

      return loginDispatch({
        type: "lOGIN_BY_PHONE",
        payload: login.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const verifyLoginByNumber = async (otp) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/user/verify_login`;
      const login = await axios.post(
        url,
        { otp: otp },
        { withCredentials: true }
      );

      console.log(login);

      return loginDispatch({
        type: "VERIFY_LOGIN_USER",
        payload: login.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const fetchLoginUser = async () => {
    try {
      // console.log("User Data => ");
      const url = `${process.env.REACT_APP_BASE_URL}api/user/loginUserData`;
      const loginUser = await axios.get(url, {withCredentials: true});
      
      // console.log("User Data => ", loginUser);

      return loginDispatch({
        type: "FETCH_LOGIN_DATA",
        payload: loginUser.data,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        ...productState,
        ...productByCate,
        ...filterMultiCategory,
        ...register,
        ...login,
        ...verifyRegUser,
        updateSubTotal,
        totalQut,
        fetchProduct,
        filterByCategory,
        searchProduct,
        filterByMultiCategory,
        registerUser,
        loginByNumber,
        verifyRegUSer,
        verifyLoginByNumber,
        fetchLoginUser,
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
