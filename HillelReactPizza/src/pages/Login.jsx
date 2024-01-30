import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {deleteCart} from "../redux/slices/cartSlice.js";
import { addUserName } from "../redux/slices/userInfoSlice.js";

const Login = () => {
  const dispath = useDispatch();
  const name = useSelector((state) => state.userInfo.userName);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // onChange(event.target.value);
    dispath(addUserName(event.target.value));
  };

  const handleClick = () => {
    event.preventDefault();
    handleNavigateTuMenu();
  };

  const handleNavigateTuMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="loginPageWrapper">
      <h1 className="loginPageTitle">The best pizza.</h1>
      <p className="loginPageSlogan">
        {" "}
        Straight out of the oven, straight to you
      </p>
      <p className="loadingPageMain">
        {" "}
        👋 Welcome! Please start by telling us your name:
      </p>
      <form className="loginPageForm" onSubmit={handleClick}>
        <input
          className="loadingPageInput"
          type="text"
          placeholder={name ? name : "Your full name"}
          onChange={handleInputChange}
        />
        <button disabled={!name} type="submit" className="loadingPageButton">
          Go to menu
        </button>
      </form>
    </div>
  );
};

export default Login;
