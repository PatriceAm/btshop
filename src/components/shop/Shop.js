import {useSelector} from "react-redux";
import Item from "../item/Item";
import Today from "../today/Today";
import "./Shop.css";

const Shop = () => {
  const store = useSelector((state) => state.inStore);

  return (
    <div className="shop_container">
      <Today store={store} />
      <div className="shop_inner_container">
        {store.map((prod) => (
          <Item prod={prod} key={prod.name} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
