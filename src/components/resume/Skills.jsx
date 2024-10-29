import { skillsLeft, skillsRight } from "@/data";
import { motion } from "framer-motion";
import SkillBar from "../card/SkillBar";
export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center gap-4 py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">Feautures</p>
        <p className="text-4xl font-bold">Development Skills</p>
      </div>
      <div className="flex w-full gap-20 mt-14">
        <div className="w-1/2">
          {skillsLeft.map((item, index) => (
            <SkillBar key={index} {...item} />
          ))}
        </div>
        <div className="w-1/2">
          {skillsRight.map((item, index) => (
            <SkillBar key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
