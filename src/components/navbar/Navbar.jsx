import { logo2 } from "@/assets/images";
import { navLinksData } from "@/data";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="w-full h-24 sticky navbar top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b border-gray-600">
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-full border p-2 border-lightText">
          <img src={logo2} alt="logo" className="h-full  w-full " />
        </div>
        <h1 className="uppercase font-bold">in bio</h1>
      </div>
      <div>
        <ul className="flex items-center gap-10  ">
          {navLinksData.map(({ title, link, id }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
    </nav>
  );
};

export default Navbar;
