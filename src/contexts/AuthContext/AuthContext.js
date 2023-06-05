import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPasswprd] = useState("");
  const [signup, setSignUp] = useState({
    email: "",
    firstName: "",
    lastName: "",
    crntPassword: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (userName === "" || password === "") {
      toast.warning("Please Enter Email & Password");
    } else {
      try {
        const credentials = {
          email: userName,
          password: password,
        };
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        if (response.status === 200) {
          toast.success("Login success");
          const { encodedToken, foundUser } = await response.json();
          setUser(foundUser);
          localStorage.setItem("token", encodedToken);
          localStorage.setItem("user", foundUser.firstName);
          localStorage.setItem("last", foundUser.lastName);
        } else {
          toast.error("The email you entered is not Registered.");
        }
        setIsLoggedIn(true);
        navigate(
          location.state?.from?.pathname ? location.state.from?.pathname : "/"
        );
      } catch (e) {
        toast.error(e.message);
        console.error(e);
      }
    }
  };
  const guestLogin = async () => {
    try {
      const credentials = {
        email: "gkvc9696@gmail.com",
        password: "gautam12345",
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      if (response.status === 200) {
        toast.success("Login success");
        const { encodedToken, foundUser } = await response.json();
        setUser(foundUser);
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", foundUser.firstName);
        localStorage.setItem("last", foundUser.lastName);

        setIsLoggedIn(true);
      } else {
        toast.error("The email you entered is not Registered.");
      }
      navigate(
        location.state?.from?.pathname ? location.state.from?.pathname : "/"
      );
    } catch (e) {
      toast.error(e.message);
      console.error(e);
    }
    // }
  };

  const signupHandler = async () => {
    if (
      signup.firstName === "" ||
      signup.lastName === "" ||
      signup.email === "" ||
      signup.password === "" ||
      signup.crntPassword === ""
    ) {
      toast.warning("Please! fill All Information");
    } else {
      try {
        const credentials = signup;
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        toast.success("SignUp success");
        const { encodedToken } = await response.json();
        localStorage.setItem("token", encodedToken);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setPasswprd,
        setUserName,
        signupHandler,
        loginHandler,
        signup,
        setSignUp,
        user,
        userName,
        password,
        guestLogin,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
