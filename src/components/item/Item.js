import {Link} from "react-router-dom";

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
      <Link to={`/shop/${prod.id}`}>
        <h2>{prod.name}</h2>
      </Link>
    </div>
  );
};

export default Item;
