import { productsData } from "@/data";
import Title from "../title/Title";
import ProductCard from "../card/ProductCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title={"Visit my portfolio and keep your feedback"}
          des={"My Projects"}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        {productsData.map((el, index) => (
          <ProductCard key={index} {...el} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
