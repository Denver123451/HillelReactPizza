import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem.jsx";
import { deleteCart } from "../redux/slices/cartSlice.js";
import { useContext } from "react";
import { UserContext } from "../context/UserInfoContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { value } = useContext(UserContext);
  const items = useSelector((state) => state.cart.items);
  const dispath = useDispatch();

  const handelClearCart = () => {
    dispath(deleteCart());
  };

  const handelOrderPizzas = () => {
    console.log(items);
  };
  const navigate = useNavigate();
  const handleNavigateTuMenu = () => {
    navigate("/menu");
  };

  const isItems = items.length > 0;

  return (
    <div className="loginPageWrapper">
      <button onClick={handleNavigateTuMenu} className="buttonBackToMenu">
        {" "}
        ← Back to menu
      </button>

      <div className="cartName">Your cart, {value}</div>
      {!isItems ? (
        <div className="cartName">Please make your order.</div>
      ) : (
        <div className="cartItemsHolder">
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="cartPageButtonWrapper">
            <button onClick={handelOrderPizzas} className="cartItemPlus">
              {" "}
              ORDER PIZZAS
            </button>
            <button onClick={handelClearCart}> CLEAR CART</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
