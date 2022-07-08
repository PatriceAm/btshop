import {useState} from "react";
import "./Basket.css";

const Basket = () => {
  const basketContent = [
    {
      id: 1,
      name: "ZEWA Toilet Paper",
      price: 0.65,
      type: "roll",
      discount: "Buy six rolls for £3.25 ",
      discApplyAt: 6,
      discPrice: 0.54167,
    },
    {
      id: 2,
      name: "TEMPO Face Mask",
      price: 2.5,
      type: "each",
      discount: "Buy 2 for £4 ",
      discApplyAt: 2,
      discPrice: 2,
    },
  ];

  const [boughtTP, setBoughtTP] = useState();

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
          <tr>
            <td>2 Face mask</td>
            <td>£2.50</td>
            <td>£5</td>
            <td>£1</td>
          </tr>
          <tr>
            <td>7 Toilet Paper</td>
            <td>£0.65</td>
            <td>£4.55</td>
            <td>£0.65</td>
          </tr>
          <tr>
            <td className="lined"></td>
            <td className="lined"></td>
            <td className="lined"></td>
            <td className="lined"></td>
          </tr>
          <tr>
            <td>Total to pay:</td>
            <td></td>
            <td></td>
            <td>£7.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
