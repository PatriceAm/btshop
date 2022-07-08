import {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import "./SelectedItem.css";

const SelectedItem = () => {
  const [quantity, setQuantity] = useState(0);

  const id = useParams().id;
  const store = useSelector((state) => state.inStore);
  const prod = store.find((prod) => Number(id) === prod.id);
  return (
    <div className="selected_collector">
      <div className="selected_container">
        <img src={prod.image} alt="product" />
      </div>
      <div className="selected_options selected_container">
        <h1>{prod.name}</h1>
        <h3 className="selected_decription">{prod.decription}</h3>
        <h3 className="selected_discount">
          {prod.discount}
          <span>{prod.withoutDiscount}</span>
        </h3>
        <h3>
          <span>£{prod.price}</span> /{prod.type}
        </h3>
        <div className="selected_buttons">
          <div className="selected_trio">
            <button
              className="trio_left"
              onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : 0)}
            >
              -
            </button>
            <button>{quantity}</button>
            <button
              className="trio_right"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="add_button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
