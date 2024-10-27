import { resumeEducation } from "@/data";
import Title from "../title/Title";
import ResumeCard from "../card/ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b border-black">
      <div className="flex items-center justify-center text-center">
        <Title title={"7+ months of experience"} des={"My Resume"} />
      </div>
      <div>
        <ul className="grid w-full grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      {/* education */}
      <div>
        <div className="gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <p className="text-4xl font-bold">Education Quality</p>
        </div>
        <div className="w-1/2 mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeEducation.map((item, index) => (
            <ResumeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
