import { resumeEducation } from "@/data";
import ResumeCard from "../card/ResumeCard";
import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex w-full gap-20"
    >
      <div>
        <div className="gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <p className="text-4xl font-bold">Education Quality</p>
        </div>
        <div className=" mt-14  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeEducation.map((item, index) => (
            <ResumeCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div>
        <div className="gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - Present
          </p>
          <p className="text-4xl font-bold">Job Experience</p>
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

export default Achievements;
