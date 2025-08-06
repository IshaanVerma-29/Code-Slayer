import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Timeline from "./Timeline";
import Tracks from "./Tracks";
import Rewards from "./Rewards";
import Sponsors from "./Sponsors";
import Team from "./Team";
import FAQs from "./FAQs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-sword">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Tracks />
      <Rewards />
      <Sponsors />
      <Team />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Index;
