import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";

const MenuItem = ({ item }) => {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = item;

  const dispatch = useDispatch();

  const arrLenght = ingredients.length;

  const handelAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <li className="menuItem">
      <img
        src={imageUrl}
        alt={name}
        className={soldOut ? "black-and-white-image" : "menuItemImage"}
      />
      <div className="menuItemDescription">
        <div className="menuItemDiv">
          <p className="menuItemTitle">{item.name}</p>

          <ul className="menuItemUl">
            {ingredients.map((item, index) => {
              return (
                <li className="menuItemLi" key={index}>
                  {item + (arrLenght !== index + 1 ? ", " : "")}
                </li>
              );
            })}
          </ul>

          <p className="menuItemPrice">
            {soldOut ? "soldOut" : "€" + unitPrice + ".00"}
          </p>
        </div>

        <button
          disabled={soldOut}
          className="menuItemButton"
          onClick={handelAddToCart}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default MenuItem;
