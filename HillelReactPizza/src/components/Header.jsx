import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserInfoContext.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../redux/store.js";

const Header = () => {
  const data = useSelector((store) => store.cart.items);

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (data.length !== 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [data]);

  const { value } = useContext(UserContext);

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
      <h5 className="UserName">{value ? value : "Login please "}</h5>
    </div>
  );
};
export default Header;
