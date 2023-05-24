import { Link } from "react-router-dom";
import "../login/style.css";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export const Login = () => {
  const { setUserName, handleFormData, setPasswprd, setIsGuest } = useAuth();
  return (
    <div className="login__container">
      <form action="" onSubmit={(e) => handleFormData(e)}>
        <h2>Login</h2>
        <label>
          Enter Your Email:
          <input
            type="email"
            placeholder="xyz@gmail.com"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Enter Your Password:
          <input
            type="password"
            placeholder="xyz1234"
            onChange={(e) => setPasswprd(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="login__btn"
          onClick={() => setIsGuest(false)}
        >
          login
        </button>
        <button className="guest__login" onClick={() => setIsGuest(true)}>
          Login as guest
        </button>
        <p className="signup__link">
          Don't have account? <Link to="/signup">Sign up now</Link>
        </p>
      </form>
    </div>
  );
};
