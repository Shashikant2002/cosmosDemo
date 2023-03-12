import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
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
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
