import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import { Navbar } from "@/components/navbar";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";

const Home = () => {
  return (
    <div className="w-full h-auto px-4 bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
