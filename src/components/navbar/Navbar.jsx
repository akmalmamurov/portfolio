import { logo2 } from "@/assets/images";
import { navLinksData } from "@/data";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-600 w-fullmx-auto bg-bodyColor navbar font-titleFont">
      <div className="flex items-center justify-between h-24 px-16 mx-auto max-w-screen-2xl ">
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
