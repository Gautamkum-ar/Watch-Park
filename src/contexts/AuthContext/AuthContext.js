import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Post } from "react-axios";
import { SignUp } from "../../pages/signup/SignUp";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPasswprd] = useState("");
  const [signup, setSignUp] = useState({
    email: "",
    firstName: "",
    lastName: "",

    password: "",
  });
  const [isGuest, setIsGuest] = useState(false);
  const [user, setUser] = useState({});
  const loginHandler = async () => {
    try {
      const credentials = {
        email: isGuest ? "gkvc9696@gmail.com" : userName,
        password: isGuest ? "gautam12345" : password,
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      const { encodedToken, foundUser } = await response.json();
      setUser(foundUser);
      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.error(e);
    }
  };

  const signupHandler = async () => {
    console.log(signup);
    try {
      const credentials = signup;
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      const { encodedToken } = await response.json();
      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };
  const handleFormData = (event) => {
    loginHandler();
    event.preventDefault();
  };

  return (
    <AuthContext.Provider
      value={{
        setPasswprd,
        setUserName,
        handleFormData,
        signupHandler,
        setIsGuest,
        loginHandler,
        signup,
        setSignUp,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
