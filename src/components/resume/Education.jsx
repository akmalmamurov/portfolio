import { resumeEducation } from "@/data";
import ResumeCard from "../card/ResumeCard";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex w-full gap-20"
    >
      <div>
        <div className="flex flex-col items-center gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <p className="text-4xl font-bold">Education Quality</p>
        </div>
        <div className=" mt-14  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeEducation.map((item, index) => (
            <ResumeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
