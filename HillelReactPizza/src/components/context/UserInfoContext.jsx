import { createContext, useState } from "react";

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";
const ToogleContext = ({ children }) => {
  const [userName, setUserName] = useState(false);

  const userInfo = {
    value: userName,
    onChange: setUserName,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
export default ToogleContext;
