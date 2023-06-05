import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../footer/footerstyle.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer__main">
      <p>
        <Link to="https://github.com/Gautamkum-ar">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/gautam-kumar-7b9933251/">
          <FaLinkedin />
        </Link>
        <Link to="https://twitter.com/kum_ar_gautam">
          <FaTwitter />
        </Link>
      </p>
    </div>
  );
};
