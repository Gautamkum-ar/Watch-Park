import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import "../userProfile/style.css";
import { useState } from "react";

export const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="profile__container">
      {isLoggedIn ? (
        <div className="profile">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h3></h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
