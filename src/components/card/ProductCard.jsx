import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, des, github, website }) => {
  return (
    <div className="flex flex-col w-full h-auto px-12 py-10 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-t-lg ">
        <Link to={website} target="_blank">
          <img
            className="object-cover w-full duration-300 rounded-t-lg h-60 group-hover:scale-110"
            src={image}
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-col w-full gap-6 mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-normal uppercase text-designColor">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <Link
              to={github}
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full hover:text-designColor"
            >
              <BsGithub />
            </Link>
            <Link
              to={website}
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full hover:text-designColor"
            >
              <FaGlobe />
            </Link>
          </div>
        </div>
        <p className="mt-3 text-sm tracking-wide duration-300 hover:text-gray-100">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
