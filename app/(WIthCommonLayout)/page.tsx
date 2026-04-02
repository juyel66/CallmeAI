import AIJustGot from "../pages/AIJustGot/AIJustGot";
import AiSolutions from "../pages/AiSolutions/AiSolutions";
import Connect from "../pages/HomePage/Connect";
import HeroSection from "../pages/HomePage/HeroSection";
import WhyEvery from "../pages/HomePage/WhyEvery";
import HowItWork from "../pages/HowItWork/HowItWork";


const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyEvery />
      <Connect />
      <HowItWork />
      <AIJustGot />
      <AiSolutions />

      
    </div>
  );
};

export default HomePage;