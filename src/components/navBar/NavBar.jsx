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
import { useCart } from "../../contexts/CartContext/CartContext";
import { useWishList } from "../../contexts/wishListContext/wishListContext";

const Header = () => {
  const { state } = useCart();
  const { wishlistLength } = useWishList();
  const getStyle = ({ isActive }) => ({
    color: isActive ? "purple" : "#fdf4f4",
    // fontSize: isActive && "1.2rem",
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
      <section className="nav__links">
        <NavLink style={getStyle} to="/products">
          <FaShoppingBag />
        </NavLink>

        <NavLink style={getStyle} to="/cart">
          <FaShoppingCart />
          <p className="list__item">
            {" "}
            {state?.cart?.length > 0 && (
              <span className="cart__no">{state?.cart?.length}</span>
            )}
          </p>
        </NavLink>

        <NavLink style={getStyle} to="/wishlist">
          <FaHeart />
          <p className="list__item">
            {" "}
            {wishlistLength > 0 && (
              <span className="cart__no">{wishlistLength}</span>
            )}
          </p>
        </NavLink>
        <NavLink style={getStyle} to="/profile">
          <FaUser />
        </NavLink>
      </section>
    </header>
  );
};

export default Header;
