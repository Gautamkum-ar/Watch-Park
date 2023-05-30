import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import "../userProfile/style.css";
import { useState } from "react";


import "../userProfile/style.css";
export const User = () => {
  const { user, isLoggedIn, setIsLoggedIn } = useAuth();
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

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <h1 className="lg__hd">You are not logged in Please Login First</h1>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};
