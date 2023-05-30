import { Link } from "react-router-dom";
import "../signup/style.css";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export const SignUp = () => {
  const { setSignUp, signup, signupHandler, setIsGuest, loginHandler } =
    useAuth();
  return (
    <div className="signup__container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>SIGN UP</h2>
        <label>
          Enter Your firstname:{" "}
          <input
            type="text"
            placeholder="xyz"
            onChange={(e) =>
              setSignUp({ ...signup, firstName: e.target.value })
            }
          />
        </label>
        <label>
          Enter Your lastname:{" "}
          <input
            type="text"
            placeholder="xyz"
            onChange={(e) => setSignUp({ ...signup, lastName: e.target.value })}
          />
        </label>
        <label>
          Enter your Email:{" "}
          <input
            type="email"
            onChange={(e) => setSignUp({ ...signup, email: e.target.value })}
          />
        </label>
        <label>
          Enter new password:{" "}
          <input
            type="password"
            onChange={(e) =>
              setSignUp({ ...signup, crntPassword: e.target.value })
            }
          />
        </label>
        <label>
          Confirm password:{" "}
          <input
            type="password"
            onChange={(e) => setSignUp({ ...signup, passwod: e.target.value })}
          />
        </label>
        <button className="signup__btn" onClick={() => signupHandler()}>
          Sign Up
        </button>
        <button
          className="guest__login"
          onClick={() => {
            loginHandler();
          }}
        >
          login in as guest
        </button>
        <p className="login__link">
          Already have Account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
