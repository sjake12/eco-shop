function Nav({ onCartClick }) {
  return (
    <nav className="h-20 w-full bg-eco-800 flex justify-between items-center py-6 px-32 drop-shadow-lg">
      <h1 className="text-4xl font-open-sans font-bold cursor-pointer">
        Eco shop .
      </h1>
      <ul className="flex">
        <li className="mr-8 text-xl font-semibold hover:underline">
          <a href="#">Home</a>
        </li>
        <li className="mr-8 text-xl font-semibold hover:underline">
          <a href="#">Shop</a>
        </li>
        <li className=" text-xl font-semibold hover:underline">
          <a href="#" onClick={onCartClick}>
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
