import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import About from "./pages/About";
import Career from "./pages/Carrier";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  console.log(process.env.REACT_APP_BASE_URL)

  return (
    <>
      {loading && loading ? (
        <Loading />
      ) : (
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />

              <Route
                path="/about"
                element={
                  <>
                    <About />
                  </>
                }
              />

              <Route
                path="/contact"
                element={
                  <>
                    <Contact />
                  </>
                }
              />

              <Route
                path="/cart"
                element={
                  <>
                    <Cart />
                  </>
                }
              />

              <Route
                path="/product"
                element={
                  <>
                    <Product />
                  </>
                }
              />

              <Route
                path="/career"
                element={
                  <>
                    <Career />
                  </>
                }
              />
              <Route
                path="/checkout"
                element={
                  <>
                    <Checkout />
                  </>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
