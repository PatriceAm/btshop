import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {fillBasketR, cleanBasketR} from "../../reducers/basketReducer";

import "./Basket.css";

const Basket = () => {
  const dispatch = useDispatch();
  const inBasket = useSelector((state) => state.inBasket);

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

    // console.log("IDE LOJ TE BAROM", inBasket);
    return (
      <tr key={item.id}>
        <td>{`${item.qty} ${item.name}`}</td>
        <td className="align_right">£{item.price}</td>
        <td className="align_right">£{itemTotal}</td>
        <td className="align_right">£{discValue}</td>
        <td className="align_right add_basket">
          <p onClick={() => addHandler(item.id)}>+</p>
        </td>
        <td className=" remove_basket">
          <p onClick={() => removeHandler(item.id)}>-</p>
        </td>
      </tr>
    );
  });

  const totalToPay = (
    <tr>
      <td>Total to pay:</td>
      <td></td>
      <td></td>
      <td className="align_right">£{totalBasketPay.toFixed(2)}</td>
    </tr>
  );

  return (
    <div>
      <div className="basket_container">
        <h1>Your basket content:</h1>
        <table>
          <tbody>
            <tr>
              <td>Item</td>
              <td>Unit Cost</td>
              <td>Total Cost</td>
              <td>Discount</td>
            </tr>
            {basketSummary}
            <tr>
              <td className="lined"></td>
              <td className="lined"></td>
              <td className="lined"></td>
              <td className="lined"></td>
            </tr>
            {totalToPay}
          </tbody>
        </table>
      </div>
      <div className="links_basket">
        <Link to="/shop" className="basket_link">
          Back to the shop
        </Link>
      </div>
    </div>
  );
};

export default Basket;
