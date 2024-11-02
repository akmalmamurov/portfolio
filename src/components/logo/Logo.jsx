import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link
      to={"home"}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-2xl font-bold transition-all duration-300 font-titleFont hover:text-designColor"
    >
      A.Mamuroff
    </Link>
  );
};

export default Logo;
