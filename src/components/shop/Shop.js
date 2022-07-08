import {useSelector} from "react-redux";
import Item from "../item/Item";
import "./Shop.css";

const Shop = () => {
  const store = useSelector((state) => state.inStore);

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
