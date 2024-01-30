import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { store } from "../redux/store.js";

const Header = () => {
  const data = useSelector((store) => store.cart.items);
  const name = useSelector((state) => state.userInfo.userName);

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (data.length !== 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [data]);

  return (
    <div className="headerWrapper">
      <h5 className="headerName">PIZZA DAY</h5>
      <nav className="navigate">
        <NavLink to="/menu" className="navItem">
          Menu
        </NavLink>
        {!isCartEmpty ? (
          <NavLink to="/cart" className="navItem" aria-disabled={!isCartEmpty}>
            Cart
          </NavLink>
        ) : (
          ""
        )}
      </nav>
      <input className="HeaderInput" placeholder="Search for the order #" />
      <h5 className="UserName">{name ? name : "Login please "}</h5>
    </div>
  );
};
export default Header;
