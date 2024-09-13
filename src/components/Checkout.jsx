import React, { useState } from "react";
import gcash from "../assets/gcash.png";
import paypal from "../assets/paypal.png";
import paymaya from "../assets/paymaya.png";

function Checkout({ onClose, total = 0 }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethods = [
    { id: "gcash", name: "GCash", image: gcash },
    { id: "paypal", name: "PayPal", image: paypal },
    { id: "paymaya", name: "PayMaya", image: paymaya },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close checkout"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">Your cart</p>
            <p className="font-semibold text-2xl text-eco-800">
              ${total.toFixed(2)}
            </p>
          </div>

          <div className="w-full h-40 bg-eco-brown-200 rounded-lg flex items-center justify-center text-eco-800">
            Cart items go here
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Pay with:</p>
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center bg-eco-100 mb-2 p-4 rounded-lg cursor-pointer transition-all ${
                  selectedPayment === method.id
                    ? "ring-2 ring-eco-500"
                    : "hover:bg-eco-200"
                }`}
              >
                <div className="w-12 h-12 flex-shrink-0 mr-4">
                  <img
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{method.name}</p>
                  <p className="text-sm text-gray-600">XXXX-XXXX-XXXX-XXXX</p>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="w-5 h-5 text-eco-500 focus:ring-eco-400"
                />
              </label>
            ))}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="bg-eco-800 text-white text-lg font-bold px-6 py-2 rounded-lg hover:bg-eco-700 transition-colors focus:outline-none focus:ring-2 focus:ring-eco-500 focus:ring-offset-2"
              onClick={() => console.log("Processing payment...")}
              disabled={!selectedPayment}
            >
              Pay
            </button>
            <button
              className="bg-eco-500 text-white text-lg font-bold px-6 py-2 rounded-lg hover:bg-eco-400 transition-colors focus:outline-none focus:ring-2 focus:ring-eco-500 focus:ring-offset-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
