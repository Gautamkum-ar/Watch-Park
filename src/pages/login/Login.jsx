import "../login/style.css";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const Login = () => {
  const {
    setUserName,
    setPasswprd,
    loginHandler,
    userName,
    password,
    guestLogin,
    isLoggedIn,
  } = useAuth();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisiblity = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="login__container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        <label>
          Enter Your Email:
          <input
            type="email"
            value={userName}
            placeholder="xyz@gmail.com"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Enter Your Password:
          <input
            type={!isVisible ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPasswprd(e.target.value)}
          />
          <p className="visible__eye">
            {isVisible ? (
              <FaEye onClick={handleVisiblity} />
            ) : (
              <FaEyeSlash onClick={handleVisiblity} />
            )}
          </p>
        </label>
        <button
          type="submit"
          disabled={userName === "" || password === ""}
          className="login__btn"
          onClick={() => {
            loginHandler();
          }}
        >
          login
        </button>
        <button
          className="guest__login"
          onClick={() => {
            guestLogin();
          }}
        >
          Login as guest
        </button>
        <p className="signup__link">
          Don't have account? <Link to="/signup">Sign up now</Link>
        </p>
      </form>
    </div>
  );
};
