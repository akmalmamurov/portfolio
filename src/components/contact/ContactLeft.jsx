import { contactImg } from "@/assets/images";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8">
      <img
        src={contactImg}
        alt="contactImg"
        className="object-cover w-full h-64 mb-2 rounded-lg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Akmal Mamuroff</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base tracking-wide text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ad
          quibusdam labore fugit, voluptatem tenetur delectus omnis eligendi
          reprehenderit eum.
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
    </div>
  );
};

export default ContactLeft;
