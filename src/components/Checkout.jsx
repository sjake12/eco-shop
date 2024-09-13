import gcash from "../assets/gcash.png";
import paypal from "../assets/paypal.png";
import paymaya from "../assets/paymaya.png";

function Checkout({ onClose }) {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.43)] z-50 grid">
      <div className="w-[800px] h-[600px] bg-white self-center mx-auto p-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Your cart</p>
          <p className="font-semibold text-2xl">Total: $00.00</p>
        </div>
        <div className="w-full min-h-[30%] bg-eco-brown-200 mt-4"></div>
        <p className="font-semibold mt-4">Pay with:</p>
        <div className="mt-4">
          <div className="flex items-center bg-eco-500 mb-2">
            <div className="w-[50px]">
              <img src={gcash} />
            </div>
            <p>Gcash</p>
            <p className="mx-auto">XXXX-XXXX-XXXX-XXXX</p>
            <div className="ml-auto w-[50px] h-[50px] flex justify-center items-center">
              <input type="radio" name="payment" />
            </div>
          </div>
          <div className="flex items-center bg-eco-500 mb-2">
            <div className="w-[50px]">
              <img src={paypal} />
            </div>
            <p>Paypal</p>
            <p className="mx-auto">XXXX-XXXX-XXXX-XXXX</p>
            <div className="ml-auto w-[50px] h-[50px] flex justify-center items-center">
              <input type="radio" name="payment" />
            </div>
          </div>
          <div className="flex items-center bg-eco-500 mb-4">
            <div className="w-[50px]">
              <img src={paymaya} />
            </div>
            <p>Paymaya</p>
            <p className="mx-auto">XXXX-XXXX-XXXX-XXXX</p>
            <div className="ml-auto w-[50px] h-[50px] flex justify-center items-center">
              <input type="radio" name="payment" />
            </div>
          </div>
        </div>
        <div className="mt-auto self-end">
          <button className=" bg-eco-800 text-lg font-bold px-4 py-1 rounded-lg mr-6">
            Pay
          </button>
          <button
            className=" bg-eco-500 text-lg font-bold px-4 py-1 rounded-lg "
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
