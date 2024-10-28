const ResumeCard = ({ title, subTitle, des }) => {
  return (
    <div className="flex w-full h-[300px] group">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute flex items-center justify-center w-5 h-5 bg-black rounded-full -top-2 -left-3 bg-opacity-60">
          <span className="inline-flex w-3 h-3 duration-300 rounded-full bg-bodyColor group-hover:bg-designColor"></span>
        </span>
      </div>
      <div className="flex flex-col justify-center w-full gap-10 px-10 duration-300 bg-black rounded-lg bg-opacity-20 hover:bg-opacity-30 shadow-shadowOne">
        <div>
          <h3 className="text-2xl font-semibold duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 duration-300 group-hover:text-white">
            {subTitle}
          </p>
        </div>
        <p className="text-base font-medium text-gray-400 duration-300 group-hover:text-gray-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
