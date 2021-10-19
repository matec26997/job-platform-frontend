import React, { useState, useContext, createContext } from "react";
/**
 * This component contains all those non-public pages
 * Additionally, this component will have a user context
 * @returns
 */

const UserContext = createContext();
const AuthMain = () => {
  const [user, setUser] = useState({
    name: "John",
    last_name: "Doe",
    age: 24,
    occupation: "Software Developer",
  });
  return(<UserContext.Provider value={user}>
      <Greetings/>
  </UserContext.Provider>);
};

const Greetings = ()=> {

    return(
        <div><Message/></div>
    )
}

const Message = () => {
    const user = useContext(UserContext)
    return<span>{`Hello ${user.name}`}</span>
}
export default AuthMain;
