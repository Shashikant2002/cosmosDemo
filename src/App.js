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
import UserProfile from "./pages/UserProfile";
import CategoryInner from "./pages/CategoryInner";
import BuilkBookingPage from "./pages/BuilkBookingPage";

const App = () => {
  const [loading, setLoading] = useState(true);;
  const { totalQut, fetchProduct } = useGlobalContext();
  
  // console.log(process.env.REACT_APP_BASE_URL);

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
                path="/builk_booking"
                element={
                  <>
                    <BuilkBookingPage />
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
              <Route
                exact={true}
                path="/profile"
                element={
                  <>
                    <UserProfile />
                  </>
                }
              />
              <Route
                exact={true}
                path="/category/:categoryText"
                element={
                  <>
                    <CategoryInner />
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
