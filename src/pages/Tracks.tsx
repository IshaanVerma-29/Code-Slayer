import { useState, lazy, Suspense, memo } from "react";
import { Card } from "@/components/ui/card";

// Lazy load dialog components to reduce initial bundle size
const Dialog = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.Dialog })));
const DialogContent = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogContent })));
const DialogHeader = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogHeader })));
const DialogTitle = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogTitle })));
const DialogDescription = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogDescription })));
const DialogTrigger = lazy(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogTrigger })));

// Memoized track card to prevent unnecessary re-renders
const TrackCard = memo(({ track, onClick }: { track: any; onClick: () => void }) => {
  const getTrackStyles = (color: string) => {
    const styles = {
      pink: {
        border: "border-pink-200/50 hover:border-pink-400/70",
        gradient: "from-pink-500/15 to-purple-500/10",
        text: "text-pink-400",
        bgLight: "bg-pink-100/90",
        bgDark: "bg-pink-100/30",
        shadow: "shadow-pink-500/40"
      },
      purple: {
        border: "border-purple-200/50 hover:border-purple-400/70",
        gradient: "from-purple-500/15 to-blue-500/10",
        text: "text-purple-400",
        bgLight: "bg-purple-100/90",
        bgDark: "bg-purple-100/30",
        shadow: "shadow-purple-500/40"
      },
      blue: {
        border: "border-blue-200/50 hover:border-blue-400/70",
        gradient: "from-blue-500/15 to-cyan-500/10",
        text: "text-blue-400",
        bgLight: "bg-blue-100/90",
        bgDark: "bg-blue-100/30",
        shadow: "shadow-blue-500/40"
      },
      green: {
        border: "border-green-200/50 hover:border-green-400/70",
        gradient: "from-green-500/15 to-emerald-500/10",
        text: "text-green-400",
        bgLight: "bg-green-100/90",
        bgDark: "bg-green-100/30",
        shadow: "shadow-green-500/40"
      },
      cyan: {
        border: "border-cyan-200/50 hover:border-cyan-400/70",
        gradient: "from-cyan-500/15 to-emerald-500/10",
        text: "text-cyan-400",
        bgLight: "bg-cyan-100/90",
        bgDark: "bg-cyan-100/30",
        shadow: "shadow-cyan-500/40"
      },
      orange: {
        border: "border-orange-200/50 hover:border-orange-400/70",
        gradient: "from-orange-500/15 to-red-500/10",
        text: "text-orange-400",
        bgLight: "bg-orange-100/90",
        bgDark: "bg-orange-100/30",
        shadow: "shadow-orange-500/40"
      }
    };
    return styles[color as keyof typeof styles] || styles.pink;
  };

  const styles = getTrackStyles(track.color);

  return (
    <Card 
      className={`group relative overflow-hidden bg-card/80 border-4 ${styles.border} transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg ${styles.shadow} rounded-2xl`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative p-6 pt-12 text-center z-10">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-xl ${styles.bgDark} border-2 border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
          <img
            src={track.image}
            alt={track.title}
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        </div>
        <h3 className={`text-xl font-bold mb-2 text-white group-hover:${styles.text} transition-colors duration-300`}>
          {track.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{track.description}</p>
      </div>
    </Card>
  );
});

TrackCard.displayName = "TrackCard";

const trackDetails = {
  healthcare: {
    title: "Healthcare Technology",
    description: "Transform healthcare delivery through innovative technology solutions",
    details: [
      "Develop patient care management systems",
      "Create health monitoring and diagnostic tools",
      "Build telemedicine and remote care platforms",
      "Design wellness and fitness applications",
      "Implement medical data analytics solutions",
      "Create AI-powered health assistants"
    ]
  },
  aiml: {
    title: "AI & Machine Learning",
    description: "Build intelligent systems that learn, adapt, and solve complex problems",
    details: [
      "Develop machine learning models and algorithms",
      "Create natural language processing applications",
      "Build computer vision and image recognition systems",
      "Implement predictive analytics solutions",
      "Design intelligent automation tools",
      "Create AI-powered recommendation engines"
    ]
  },
  web3: {
    title: "Web3 Development",
    description: "Build decentralized applications and blockchain solutions for the future",
    details: [
      "Develop smart contracts and DApps",
      "Create decentralized finance (DeFi) applications",
      "Build NFT marketplaces and platforms",
      "Implement blockchain-based identity systems",
      "Design Web3 gaming and metaverse experiences",
      "Create decentralized storage solutions"
    ]
  },
  sustainability: {
    title: "Sustainability",
    description: "Innovate for a greener future with energy, environment, and sustainable solutions",
    details: [
      "Develop renewable energy monitoring systems",
      "Create carbon footprint tracking applications",
      "Build waste management and recycling platforms",
      "Implement environmental monitoring solutions",
      "Design sustainable transportation systems",
      "Create smart city and IoT sustainability solutions"
    ]
  },
  iot: {
    title: "Internet of Things",
    description: "Connect devices, analyze data, and build intelligent systems that bridge physical and digital worlds",
    details: [
      "Develop IoT device management platforms",
      "Create smart home and building automation systems",
      "Build industrial IoT monitoring solutions",
      "Implement real-time data analytics and visualization",
      "Design edge computing and processing systems",
      "Create IoT security and privacy solutions"
    ]
  },
  openinnovation: {
    title: "Open Innovation",
    description: "Create groundbreaking solutions across any domain with unlimited creativity",
    details: [
      "Develop cross-platform applications and tools",
      "Create innovative gaming and entertainment experiences",
      "Build educational technology and e-learning platforms",
      "Implement social impact and community solutions",
      "Design accessibility and assistive technology tools",
      "Create productivity and collaboration applications"
    ]
  }
};

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const trackCards = [
    { id: "healthcare", title: "Healthcare", description: "Transform healthcare with technology: patient care, data, and wellness.", image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088259/healthcare_jr6luo.png", color: "pink" },
    { id: "aiml", title: "AI/ML", description: "Build intelligent systems: machine learning, automation, and smart apps.", image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088229/ai_ml_cdzka6.png", color: "purple" },
    { id: "web3", title: "Web3 Development", description: "Build decentralized applications and blockchain solutions for the future.", image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088246/web3_nl27wu.png", color: "blue" },
    { id: "sustainability", title: "Sustainability", description: "Innovate for a greener future: energy, environment, and sustainable solutions.", image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088234/sustainability_porhao.png", color: "green" },
    { id: "iot", title: "Internet of Things", description: "Connect devices, analyze data, and build intelligent systems that bridge the physical and digital worlds.", image: "https://res.cloudinary.com/dembediei/image/upload/v1758026108/IoT_image_zrwgte.png", color: "cyan" },
    { id: "openinnovation", title: "Open Innovation", description: "Create groundbreaking solutions across any domain with unlimited creativity.", image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088260/open_innovation_vfestc.png", color: "orange" }
  ];

  return (
    <>
      <section id="tracks" className="relative py-20 px-4 overflow-hidden">
        {/* Optimized background with single overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089328/4_lrmplt.jpg"
            alt="Tracks Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-6 text-white">
            Hackathon Tracks
            <div className="text-base mt-1 text-gray-300" style={{ fontSize: "0.85em" }}>
              ハッカソンのトラック
            </div>
          </h2>
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/30 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">
                Choose Your Path
                <div style={{ fontSize: "0.8em" }} className="text-primary/80 mt-1">
                  あなたの道を選んでください
                </div>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackCards.map((track) => (
              <TrackCard
                key={track.id}
                track={track}
                onClick={() => setSelectedTrack(track.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lazy loaded dialog */}
      <Suspense fallback={null}>
        {selectedTrack && (
          <Dialog open={!!selectedTrack} onOpenChange={(open) => !open && setSelectedTrack(null)}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 border border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {trackDetails[selectedTrack as keyof typeof trackDetails].title}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-300">
                  {trackDetails[selectedTrack as keyof typeof trackDetails].description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What You Can Build:</h4>
                  <ul className="space-y-2">
                    {trackDetails[selectedTrack as keyof typeof trackDetails].details.map((detail, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </Suspense>
    </>
  );
};

export default Tracks;