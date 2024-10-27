import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import { Navbar } from "@/components/navbar";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";

const Home = () => {
  return (
    <div
      className="w-full h-auto bg-bodyColor text-lightText"
      style={{ scrollbarColor: "#1e2024", scrollbarWidth: "thin" }}
    >
        <Navbar />
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Banner />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default Home;
