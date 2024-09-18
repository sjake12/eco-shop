import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

import Login from "./components/Login";

import Admin from "./components/Admin";

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
              <Nav onCartClick={handleCartClick} />
              <Hero onLoginClick={handleLoginClick} />
              <Products />
              <Shop />
              <footer className="h-[40vh] w-full bg-eco-800 p-10 flex flex-col items-center justify-center lg:justify-between text-white">
                <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
                  <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h1 className="font-open-sans text-5xl font-extrabold mb-6">
                      Ecco Shop.
                    </h1>
                    <p className="max-w-lg mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed text-gray-300">
                      Welcome to Ecco shop, your one-stop online store for all
                      your eco-friendly needs. We offer a wide range of products
                      made from sustainable materials and designed to reduce
                      waste.
                    </p>
                  </div>
                  <div className="lg:w-1/4">
                    <h4 className="font-bold text-3xl mb-4">About Us</h4>
                    <ul className="font-roboto text-lg space-y-4">
                      <li>Stephen Jake Apostol</li>
                      <li>Ralph Vincent Rodriguez</li>
                      <li>Katherine Macandili</li>
                      <li>Riemy Joy Martinez</li>
                    </ul>
                  </div>
                </div>
              </footer>
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
