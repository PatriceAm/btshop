import {Link} from "react-router-dom";

import "./Item.css";

const Item = ({prod}) => {
  return (
    <Link to={`/shop/${prod.id}`} className="item_container">
      <img src={prod.image} alt={prod.name} />
      <p className="item_price">
        Price: £<span>{prod.price}</span> / {prod.type}
      </p>
      <p className="product_name">{prod.name}</p>
    </Link>
  );
};

export default Item;
