import { useEffect, useState } from "react";
import { URL } from "../constans/constants.js";
import MenuItem from "../components/MenuItem.jsx";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const resoult = await fetch(`${URL}/menu`);

        if (!resoult.ok) {
          throw new Error("failed to fetch");
        }

        const { data } = await resoult.json();
        setMenu(data);
      } catch (e) {
        console.log(e.massage);
      }
    };
    getMenu(menu);
  }, []);
  return (
    <div className="loginPageWrapper">
      <h1>Our menu</h1>
      <ul className="menuUL">
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
