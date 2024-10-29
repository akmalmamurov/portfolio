import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaJs,
  FaLinkedinIn,
  FaReact,
  FaTelegramPlane,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "Creative."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2">
      <div className="flex flex-col gap-5 ">
        <h4 className="text-lg font-normal uppercase">welcome to my world</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm
          <span className="capitalize text-designColor"> Akmal Mamuroff</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle={"|"}
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTelegramPlane />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Best skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <RiTailwindCssFill />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
