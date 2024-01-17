import { useContext } from "react";
import { UserContext } from "./context/UserInfoContext.jsx";

const Header = () => {
  const { value } = useContext(UserContext);

  return (
    <div className="headerWrapper">
      <h5 className="headerName">PIZZA DAY</h5>
      <input className="HeaderInput" placeholder="Search for the order #" />
      <h5 className="UserName">{value ? value : "Login please "}</h5>
    </div>
  );
};
export default Header;
