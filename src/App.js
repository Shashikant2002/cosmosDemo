import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
