import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <h1>Welcome to Our Hygiene Store</h1>
      <p>
        Hygiene is critical, and so is a reliable supply of high quality
        products and materials.
      </p>
      <Link to={"/shop"}>
        <h2>Please take a look at our current offer</h2>
      </Link>
    </div>
  );
};

export default Home;
