import { contactImg } from "@/assets/images";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center lgl:mb-0 mb-5">
      <img
        src={contactImg}
        alt="contactImg"
        className="object-cover w-full h-64 mb-2 rounded-lg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Akmal Mamuroff</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base tracking-wide text-gray-400">
          If you're in search of a skilled JavaScript developer, you've come to
          the right place. I specialize in building, optimizing, and scaling
          high-performance applications. With a focus on delivering seamless,
          efficient solutions, I can help bring your vision to life—whether it's
          creating new software or enhancing existing projects for maximum
          impact.
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Phone:{" "}
          <Link to={"tel:+99899271999"} className="text-lightText">
            +99899 927 19 99
          </Link>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email:{" "}
          <Link to={"mail:akmalmamurov99@gmail"} className="text-lightText">
            akmalmamurov99@gmail.com
          </Link>
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <Link
            to={"https://www.facebook.com/akmal.mamuroff.5"}
            target="_blank"
            className="bannerIcon"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"https://t.me/akmalmamuroff"}
            target="_blank"
            className="bannerIcon"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/akmal-ma-murov-554003259/"}
            target="_blank"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
