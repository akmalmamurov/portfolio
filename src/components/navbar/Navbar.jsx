import { Link } from "react-scroll";

import { logo2 } from "@/assets/images";
import { navLinksData } from "@/data";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full h-24 px-5 bg-bodyColor font-titleFont">
      <div className="flex items-center justify-between w-full h-full border-b border-b-gray-600 ">
        <div className="flex items-center gap-2">
          <div className="w-[60px] h-[60px] rounded-full border p-2 border-lightText">
            <img src={logo2} alt="logo" className="w-full h-full " />
          </div>
          <h1 className="font-bold uppercase">in bio</h1>
        </div>
        <div>
          <ul className="flex items-center gap-10 ">
            {navLinksData.map(({ title, link, id }) => (
              <li
                className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                key={id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
