import {
  FaHeart,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

import "../navBar/navStyle.css";
import { Search } from "../search/Search";

const Header = () => {
  const getStyle = ({ isActive }) => ({
    color: isActive ? "purple" : "#fdf4f4",
    fontSize: isActive && "1.2rem",
    borderBottom: isActive && "2px solid purple",
  });
  return (
    <header className="header">
      <span className="logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="" />
          <p>WATCH PARK</p>
        </NavLink>
      </span>
      <Search />
      <ul className="nav__links">
        {/* <li>
          <FaSearch />
          <NavLink style={getStyle} to="/pro"></NavLink>
        </li> */}
        <li>
          <NavLink style={getStyle} to="/products">
            <FaShoppingBag />
          </NavLink>
        </li>

        <li>
          <NavLink style={getStyle} to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
        <li>
          <NavLink style={getStyle} to="/wishlist">
            <FaHeart />
          </NavLink>
        </li>
        <li>
          <NavLink style={getStyle} to="/user">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
