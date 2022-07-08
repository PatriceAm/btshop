import "./Item.css";
// import ima from "./assets/toilet_paper.png";

const Item = ({prod}) => {
  return (
    <div className="item_container">
      <img src={prod.image} alt="product" />
      <h3>
        Price: £<span>{prod.price}</span>/{prod.type}
      </h3>
      {/* <img src={ima}></img> */}
      <h2>{prod.name}</h2>
    </div>
  );
};

export default Item;
