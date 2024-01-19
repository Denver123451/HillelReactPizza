import { useContext } from "react";
import { UserContext } from "../context/UserInfoContext.jsx";

const Login = () => {
  const { value, onChange } = useContext(UserContext);

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleClick = () => {
    event.preventDefault();
    console.log(value);
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
          placeholder="Your full name"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="loadingPageButton"
          // onClick={handleClick}
        >
          console.log з ім'ям
        </button>
      </form>
    </div>
  );
};

export default Login;
