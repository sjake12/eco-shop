import Card from "./Card";
import products from "../items";

function Shop() {
  const items = products.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        productName={item.name}
        description={item.description}
      />
    );
  });

  return (
    <section className="px-40 mt-20 pb-20">
      <h4 className="font-bold text-4xl font-roboto">Shop</h4>
      <div className="grid grid-cols-4 gap-20 mt-6">{items}</div>
    </section>
  );
}

export default Shop;
