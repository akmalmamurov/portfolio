import { useState } from "react";
import { resumeTabs } from "@/data";
import Title from "@/components/title/Title";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section id="resume" className="w-full py-20 border-b border-black">
      <div className="flex items-center justify-center text-center">
        <Title title={"7+ months of experience"} des={"My Resume"} />
      </div>
      <div>
        <ul className="grid w-full grid-cols-3">
          {resumeTabs.map((el, index) => (
            <li
              key={index}
              className={`${activeTab === el ? "border-designColor rounded-lg" : "border-transparent"} resumeLi capitalize`}
              onClick={() => setActiveTab(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      {activeTab === "education" ? (
        <Education />
      ) : activeTab === "professional skills" ? (
        <Skills />
      ) : activeTab === "experience" ? (
        <Experience />
      ) : (
        <Achievements />
      )}
    </section>
  );
};

export default Resume;
