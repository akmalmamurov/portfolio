const SkillBar = ({ skill, percentage }) => {
  return (
    <div>
      <p className="text-sm font-medium uppercase">{skill}</p>
      <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
        <span
          className="relative h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute right-0 -top-7">{percentage}%</span>
        </span>
      </span>
    </div>
  );
};

export default SkillBar;
