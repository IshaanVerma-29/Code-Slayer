import { Button } from "@/components/ui/button";
import { Sword } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero section vid.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Gradient overlay for demon slayer theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/20"></div>
            </div>

            {/* Original flame background as fallback/additional effect */}
            <div className="absolute inset-0 flame-bg opacity-10"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 demon-text animate-scroll-reveal drop-shadow-2xl">
                    Code Slayer Hackathon 2025
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white animate-scroll-reveal drop-shadow-lg">
                    Demon Slayer: Kimetsu no Yaiba
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-scroll-reveal drop-shadow-md">
                    Unleash your coding prowess in the ultimate Web3 hackathon. Build, innovate, and claim your place among the legends.
                </p>
                <Button size="lg" className="flame-bg hover-blade font-semibold px-8 py-4 cursor-blade shadow-2xl hover:shadow-primary/50">
                    <Sword className="mr-2 h-5 w-5" />
                    Enter the Battle
                </Button>
            </div>
        </section>
    );
};

export default Hero;
