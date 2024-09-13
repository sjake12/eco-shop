import Card from "./Card";
import data from "../featured";

function Products() {
  const card = data.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        productName={item.name}
        description={item.description}
      />
    );
  });
  return (
    <section className="mt-40 px-40 bg-eco-500 py-10">
      <h3 className="text-4xl font-bold font-roboto text-center mb-6">
        Featured Products
      </h3>
      <div className="grid grid-cols-4">{card}</div>
    </section>
  );
}

export default Products;
