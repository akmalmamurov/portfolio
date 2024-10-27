import { DiAtom, DiReact, DiDatabase, DiStreamline } from "react-icons/di";
import { IoIosFlash } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import { FaTabletAlt } from "react-icons/fa";

const iconMap = {
  responsive: <FaTabletAlt />,
  atom: <DiAtom />,
  DiReact: <DiReact />,
  DiDatabase: <DiDatabase />,
  DiStreamline: <DiStreamline />,
  DiFlash: <IoIosFlash />,
};
const FeaturesCard = ({ title, desc, icon }) => {
  return (
    <div className="flex items-center w-full px-8 py-10 rounded-lg h-80 shadow-shadowOne bg-gradient-to-r from-bodyColor  to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="overflow-y-hidden h-72 ">
        <div className="flex flex-col h-full gap-6 transition-transform duration-500 translate-y-14 group-hover:translate-y-0">
          <div>
            <span className="text-5xl icon text-designColor">
              {iconMap[icon]}
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-300 font-titleFont">
              {title}
            </h2>
            <p className="text-base">{desc}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
