import { motion } from "framer-motion";
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm font-medium uppercase">{skill}</p>
      <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute right-0 -top-7">{percentage}%</span>
        </motion.span>
      </span>
    </div>
  );
};

export default SkillBar;
