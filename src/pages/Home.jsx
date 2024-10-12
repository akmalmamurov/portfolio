import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import { Navbar } from "@/components/navbar";

const Home = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
  );
};

export default Home;
