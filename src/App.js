import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import { useGlobalContext } from "./context/context";
import About from "./pages/About";
import Career from "./pages/Carrier";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LoginSign from "./pages/LoginSign";
import Register from "./pages/Register";
import Product from "./pages/Product";

const App = () => {
  const [loading, setLoading] = useState(true);;
  const { totalQut, fetchProduct } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    totalQut();
    fetchProduct();
    setLoading(false);
  }, []);

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
              <Route
                exact={true}
                path="/loginSign"
                element={
                  <>
                    <LoginSign />
                  </>
                }
              />
              <Route
                exact={true}
                path="/register"
                element={
                  <>
                    <Register />
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
