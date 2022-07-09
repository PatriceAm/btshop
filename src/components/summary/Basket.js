import {useState} from "react";
import {useSelector} from "react-redux";
import "./Basket.css";

const Basket = () => {
  const inBasket = useSelector((state) => state.inBasket);
  // const [totalBasketPay, setTotalBasketPay] = useState(0);
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
    return (
      <tr key={item.id}>
        <td>
          {`${item.qty} `}
          {item.name}
        </td>
        <td className="align_right">£{item.price}</td>{" "}
        <td className="align_right">£{finalPrice}</td>
        <td className="align_right">£{discValue}</td>
      </tr>
    );
  });

  const totalToPay = (
    <tr>
      <td>Total to pay:</td>
      <td></td>
      <td className="align_right">£{totalBasketPay}</td>
      <td></td>
    </tr>
  );
  return (
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
          <>{basketSummary}</>
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
  );
};

export default Basket;
