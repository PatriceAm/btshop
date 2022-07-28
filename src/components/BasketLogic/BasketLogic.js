import {fillBasketR, cleanBasketR} from "../../reducers/basketReducer";
import {Link} from "react-router-dom";

const BasketLogic = ({inBasket, dispatch}) => {
  let totalBasketPay = 0;

  const basketSummary = inBasket.map((item) => {
    const itemTotal = (Number(item.price) * Number(item.qty)).toFixed(2);

    const discPriceQty =
      Math.floor(item.qty / item.discApplyAt) * item.discApplyAt;

    const discValue = (
      discPriceQty * item.price -
      discPriceQty * item.discPrice
    ).toFixed(2);
    const finalPrice = itemTotal - discValue;
    totalBasketPay = totalBasketPay + finalPrice;

    const removeHandler = (id) => {
      const updatedBasket = inBasket.map((item) =>
        Number(item.id) !== Number(id)
          ? item
          : {...item, qty: Number(item.qty) - 1}
      );
      dispatch(fillBasketR(updatedBasket));
      dispatch(cleanBasketR(updatedBasket));
    };

    const addHandler = (id) => {
      const updatedBasket = inBasket.map((item) =>
        Number(item.id) !== Number(id)
          ? item
          : {...item, qty: Number(item.qty) + 1}
      );
      dispatch(fillBasketR(updatedBasket));
    };

    return (
      <div className="items" key={item.id}>
        <p className="item_name">
          <span className="quantity">{item.qty} </span> {item.name}
        </p>
        <p>£{item.price}</p>
        <p>£{itemTotal}</p>
        <p className="discValue">£{discValue}</p>
        <div className="buttons_container">
          <p className="add_basket" onClick={() => addHandler(item.id)}>
            +
          </p>
          <p className="remove_basket" onClick={() => removeHandler(item.id)}>
            ─
          </p>
        </div>
      </div>
    );
  });

  const totalToPay = (
    <div className="total_container">
      <h2>Total to pay:</h2>
      <p className="align_right">£{totalBasketPay.toFixed(2)}</p>
    </div>
  );

  return (
    <>
      <div className="basket_container">
        <h1>Your basket content:</h1>

        <div className="basket_titles">
          <p>Item</p>
          <p>Unit Cost</p>
          <p>Total Cost</p>
          <p>Discount</p>
          <p> </p>
          <p> </p>
        </div>
        <div className="line"></div>
        {basketSummary}
        <div className="line"></div>
        {totalToPay}
      </div>
      <div className="links_basket">
        <Link to="/shop" className="basket_link">
          Back to the shop
        </Link>
      </div>
    </>
  );
};

export default BasketLogic;
