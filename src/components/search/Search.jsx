import { FaSearch } from "react-icons/fa";

import "../search/searchStyle.css";

export const Search = () => {
  return (
    <div className="nav__search">
      <input type="text" placeholder="Search watches here..." />
      <span>
        {" "}
        <FaSearch />
      </span>
    </div>
  );
};
