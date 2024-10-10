import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleCartClick = () => {
    setIsPopUpVisible(true);
  };

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const handleClose = () => {
    setIsPopUpVisible(false);
    setIsLoginVisible(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isPopUpVisible && <Checkout onClose={handleClose} />}
              {isLoginVisible && <Login onClose={handleClose} />}
              <Nav
                onCartClick={handleCartClick}
                onLoginClick={handleLoginClick}
              />
              <Hero onLoginClick={handleLoginClick} />
              <Products />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
