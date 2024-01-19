import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/cartSlice.js";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handelDeleteFromCart = () => {
    dispatch(deleteFromCart(item.id));
  };

  const handlIncrement = () => {
    dispatch(incrementQty(item.id));
  };

  const handlDecrement = () => {
    dispatch(decrementQty(item.id));
  };

  return (
    <div className="cartItemWrapper">
      <div className="cartItemHolder">
        <div className="cartItemQty">{item.qty} X</div>
        <div className="cartItemPizzaName">{item.name}</div>
      </div>

      <div className="cartItemHolder">
        <div className="cartItemQty"> € {item.unitPrice * item.qty} .00</div>
        <button onClick={handlIncrement} className="cartItemPlus">
          +
        </button>
        <div className="cartItemQty">{item.qty}</div>
        <button onClick={handlDecrement} className="cartItemPlus">
          -
        </button>
        <button onClick={handelDeleteFromCart} className="cartItemPlus">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
