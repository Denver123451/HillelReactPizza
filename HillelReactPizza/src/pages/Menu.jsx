import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../redux/slices/getMenuSlice.js";

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, menuItems } = useSelector(
    (state) => state.getMenu,
  );

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  if (isError) {
    return <h2>loading error</h2>;
  }
  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="loginPageWrapper">
      <h1>Our menu</h1>
      <ul className="menuUL">
        {!!menuItems &&
          menuItems.map((item) => <MenuItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
};

export default Menu;
