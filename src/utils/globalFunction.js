export const addToCart = async (item) => {
  try {
    let products = [];
    let productArray = JSON.parse(localStorage.getItem("cartPro"));
    if (productArray !== null) {
      products = productArray;
    }
    products.push(item);
    // console.log(products);
    localStorage.setItem("cartPro", JSON.stringify(products));
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const fetch_cart = () => {
  try {
    let productArray = JSON.parse(localStorage.getItem("cartPro"));
    if (productArray) {
      return productArray;
    } else {
      return [];
    }
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const remove_cart = (eleR) => {
  try {
    let productArray = JSON.parse(localStorage.getItem("cartPro"));

    const filterData = productArray.filter(
      (datamain) => eleR.data._id !== datamain.data._id
    );

    localStorage.setItem("cartPro", JSON.stringify(filterData));
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const updateCart = (data) => {
  try {
    localStorage.setItem("cartPro", JSON.stringify(data));
  } catch (err) {
    console.log("Error: " + err);
  }
};
