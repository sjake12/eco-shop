import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClose = () => {
    setIsPopUpVisible(false);
  };

  return (
    <>
      {isPopUpVisible && <Checkout onClose={handleClose} />}
      <Nav onCartClick={handleClick} />
      <Hero />
      <Products />
      <Shop />
      <footer className="h-[40vh] w-full bg-eco-800 p-20 flex items-center">
        <div>
          <h1 className="font-open-sans text-4xl font-bold mb-6">Ecco shop.</h1>
          <p className="max-w-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            totam, optio iure tenetur error vitae quibusdam{" "}
          </p>
        </div>
        <div className="mx-auto">
          <h4 className="font-bold text-2xl">About Us</h4>
          <ul className="font-roboto text-lg">
            <li>Stephen Jake Apostol</li>
            <li>Ralph Vincent Rodriguez</li>
            <li>Katherine Macandili</li>
            <li>Riemy Joy Martinez</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
