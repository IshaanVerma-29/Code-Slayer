import React, { useState, useEffect } from 'react';
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
import IntroVideo from "@/components/IntroVideo";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false); // Start with false
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the intro
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      setShowIntro(false); // Don't show intro if already seen
      setIsLoading(false);
    } else {
      setShowIntro(false); // Show intro if not seen
      setIsLoading(false);
    }
  }, []);

  const handleVideoComplete = () => {
    setShowIntro(false);
    localStorage.setItem('hasSeenIntro', 'true');
  };

  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll events
    const handleScroll = () => {
      document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('in-view');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <>
      {showIntro && <IntroVideo onVideoComplete={handleVideoComplete} />}
      <div className={`min-h-screen bg-background cursor-sword transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
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
    </>
  );
};

export default Index;