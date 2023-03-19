export const addToCart = async (item) => {
  try {
    let products = [];
    let productArray = JSON.parse(localStorage.getItem("cartPro"));
    if (productArray !== null) {
      products = productArray;
    }
    products.push(item);
    localStorage.setItem("cartPro", JSON.stringify(products));
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const fetch_cart = () => {
  try {
    let productArray = JSON.parse(localStorage.getItem("cartPro"));
    return productArray;
  } catch (err) {
    console.log("Error: " + err);
  }
};
