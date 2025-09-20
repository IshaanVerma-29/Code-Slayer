import { useState, useEffect } from 'react';
import { Sword } from 'lucide-react';

interface IntroVideoProps {
  onVideoComplete: () => void;
}

const IntroVideo = ({ onVideoComplete }: IntroVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 3000);

    return () => clearTimeout(skipTimer);
  }, []);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setTimeout(() => {
      onVideoComplete();
    }, 500); // Small delay for smooth transition
  };

  const handleSkip = () => {
    setIsPlaying(false);
    onVideoComplete();
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Video Element */}
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay with Logo/Branding */}
        {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white animate-pulse">
            <Sword className="w-24 h-24 mx-auto mb-6 text-primary animate-bounce" />
            <h1 className="text-6xl font-bold font-cinzel mb-4">Code Slayer</h1>
            <p className="text-xl text-gray-300">Prepare for Battle...</p>
          </div>
        </div> */}

        {/* Skip Button */}
        {showSkipButton && (
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            Skip Intro
          </button>
        )}
      </div>
    </div>
  );
};

export default IntroVideo;