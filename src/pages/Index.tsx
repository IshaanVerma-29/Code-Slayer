import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Sword, Trophy, Users, Calendar, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-sword">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden japanese-pattern">
        <div className="absolute inset-0 flame-bg opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 demon-text animate-scroll-reveal">
            DEMON SLAYER
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground animate-scroll-reveal">
            Builder Base Hackathon 2024
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-scroll-reveal">
            Unleash your coding prowess in the ultimate Web3 hackathon. Build, innovate, and claim your place among the legends.
          </p>
          <Button size="lg" className="flame-bg hover-blade font-semibold px-8 py-4 cursor-blade">
            <Sword className="mr-2 h-5 w-5" />
            Enter the Battle
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text">About the Hackathon</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <Flame className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">Push the boundaries of Web3 technology</p>
            </Card>
            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <Users className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">Connect with fellow builders and creators</p>
            </Card>
            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <Trophy className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
              <h3 className="text-xl font-semibold mb-3">Rewards</h3>
              <p className="text-muted-foreground">Compete for incredible prizes and recognition</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-cinzel font-bold mb-16 demon-text">Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">Registration: Dec 1-15, 2024</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Target className="h-8 w-8 text-secondary" />
              <span className="text-xl font-semibold">Hackathon: Dec 16-18, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-md py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sword className="h-8 w-8 text-primary animate-mystical-pulse" />
            <span className="font-cinzel font-bold text-2xl demon-text">Builder Base</span>
          </div>
          <p className="text-muted-foreground mb-4">Empowering the next generation of Web3 builders</p>
          <p className="text-sm text-muted-foreground">© 2024 Builder Base. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
