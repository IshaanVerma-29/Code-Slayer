import { useEffect } from "react";
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
  useEffect(() => {
    // Enhanced intersection observer for Shadecn-style animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Add stagger animation to children
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('fade-in-up');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background cursor-sword">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Rewards />
        <Sponsors />
        <Team />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
