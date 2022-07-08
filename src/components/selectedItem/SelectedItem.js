import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {fillBasketR} from "../../reducers/basketReducer";

import "./SelectedItem.css";

const SelectedItem = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const id = useParams().id;
  const store = useSelector((state) => state.inStore);
  const inCart = useSelector((state) => state.inBasket);
  const [basketToSend, setBasketToSend] = useState();
  const prod = store.find((prod) => Number(id) === prod.id);

  useEffect(() => {
    const itemInBasket = {id: prod.id, name: prod.name, qty: quantity};
    setBasketToSend(itemInBasket);
  }, [quantity]);

  const addToCart = async () => {
    let updatedBasket = [];
    const alreadyIn = inCart.find((prod) => prod.id === basketToSend.id);

    if (inCart.length === 0 || !alreadyIn) {
      updatedBasket = [...inCart, basketToSend];
    } else {
      updatedBasket = inCart.map((prod) =>
        prod.id === basketToSend.id
          ? {...basketToSend, qty: prod.qty + basketToSend.qty}
          : prod
      );
    }

    setQuantity(0);
    // console.log("addToCartbol megy", updatedBasket);
    dispatch(fillBasketR(updatedBasket));
  };

  console.log("kosar", inCart);
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
          <button className="add_button" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
