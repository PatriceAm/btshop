import Item from "../item/Item";
import "./Shop.css";

const Shop = () => {
  const store = [
    {
      name: "ZEWA Toilet Paper",
      price: "0.65",
      image: "/assets/toilet_paper.png",
      type: "roll",
    },
    {
      name: "TEMPO Face Mask",
      price: "2.50",
      image: "/assets/face_mask.png",
      type: "each",
    },
  ];

  return (
    <div className="shop_container">
      <h1>Today's offer:</h1>
      <div className="shop_inner_container">
        {store.map((prod) => (
          <Item prod={prod} key={prod.name} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
