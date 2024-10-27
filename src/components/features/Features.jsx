import { featuresData } from "@/data";
import Title from "../title/Title";
import FeaturesCard from "../card/FeaturesCard";

const Features = () => {
  return (
    <div id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="what I do" />
      <div className="grid grid-cols-3 gap-20">
        {featuresData.map((el, index) => (
          <FeaturesCard key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Features;
