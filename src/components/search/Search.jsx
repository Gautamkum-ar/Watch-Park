import { FaSearch } from "react-icons/fa";

import "../search/searchStyle.css";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { dispatch } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="nav__search">
      <input
        type="text"
        placeholder="Search watches here..."
        onChange={(e) => {
          dispatch({ type: "INPUT_SEARCH", payload: e.target.value });
          navigate("/products");
          e.preventDefault();
        }}
      />
      <span>
        {" "}
        <FaSearch />
      </span>
    </div>
  );
};
