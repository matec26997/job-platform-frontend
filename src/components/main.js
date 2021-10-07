import { useEffect, useState } from "react";
import axiosInstance from "../config/axios";
import AuthMain from "./auth/AuthMain";
import GuestMain from "./guest/GuestMain";
import { Switch, Route, NavLink } from "react-router-dom";
/**
 * This component uses the axiosInstance to
 * display
 * The Auth components & Guest components
 */
const Main = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    getAuthInfo(setIsAuth);
  }, []);
  return isAuth === null? "Loading":isAuth === true? <AuthMain />:<GuestMain />;
};
/**
   * This function determines the user's auth status
   * For this, it signs in the user and, when invoked
   */
 const getAuthInfo = async (setIsAuth) => {
    const authStatus = {
      200: true,
      401: false,
    };

    try {
      const response = await axiosInstance.get("api/user");
      setIsAuth(authStatus[response.status]);
    } catch (exception) {
        const error = await exception;
      setIsAuth(authStatus[error?.response?.status]);
    }
    
  };
export default Main;
