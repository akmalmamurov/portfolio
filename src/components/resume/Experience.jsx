import ResumeCard from "../card/ResumeCard";
import { motion } from "framer-motion";
import { experienceData, experienceRightData } from "@/data";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center gap-4 py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2024</p>
        <p className="text-4xl font-bold">Job Experience</p>
      </div>
      <div className="grid grid-cols-1 gap-20 xl:grid-cols-2">
        <div>
          <div className="mt-14  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {experienceData.map((item, index) => (
              <ResumeCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <div className="mt-14  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {experienceRightData.map((item, index) => (
              <ResumeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
