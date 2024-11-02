import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksData } from "@/data";
import { useState } from "react";
import NavbarMenuIcon from "./NavbarMenuIcon";
import Logo from "../logo/Logo";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full h-24 px-5 bg-bodyColor font-titleFont">
      <div className="flex items-center justify-between w-full h-full border-b border-b-gray-600 ">
          <Logo/>
        <div>
          <ul className="items-center hidden gap-6 mdl:inline-flex lg:gap-10 ">
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
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer mdl:hidden text-designColor"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="relative flex flex-col gap-8 py-2">
                <div>
                  <h3 className="text-2xl font-bold transition-all duration-300 font-titleFont hover:text-designColor">
                    A.Mamuroff
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksData.map((item) => (
                    <li
                      key={item.id}
                      className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="mb-4 text-base uppercase font-titleFont">
                    Find me in
                  </h2>
                  <NavbarMenuIcon />
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
