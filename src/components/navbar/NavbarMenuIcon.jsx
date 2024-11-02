import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const NavbarMenuIcon = () => {
  return (
    <div className="flex gap-4">
      <Link
        to="https://t.me/akmalmamuroff"
        target="_blank"
        className="bannerIcon"
      >
        <FaTelegramPlane />
      </Link>
      <Link
        to={"https://www.facebook.com/akmal.mamuroff.5"}
        target="_blank"
        className="bannerIcon"
      >
        <FaFacebookF />
      </Link>

      <Link
        to={"https://www.linkedin.com/in/akmal-ma-murov-554003259/"}
        target="_blank"
        className="bannerIcon"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default NavbarMenuIcon;
