import { Card } from "@/components/ui/card";

const About = () => {
    return (
        <>
            {/* Section Separator */}
            <div className="relative h-32 bg-gradient-to-b from-black/80 via-primary/10 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-card/20">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-mystical-pulse"></div>
                    </div>
                </div>
            </div>

            <section id="about" className="relative py-20 px-4 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/about section vid.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/60"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-secondary/15"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text drop-shadow-2xl">
                        About the Hackathon
                        <span className="block text-base mt-2 text-gray-300" style={{ fontSize: "0.85em" }}>
                            ハッカソンについて
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - About Information */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 rounded-2xl hover:rotate-1 p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-8">
                                    <div className="inline-block bg-primary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
                                        <span className="text-primary font-semibold">
                                            Code Slayer Hackathon 2025
                                            <br />
                                            <span style={{ fontSize: "0.8em" }} className="block text-primary/80 font-normal">
                                                コードスレイヤーハッカソン 2025
                                            </span>
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300 drop-shadow-lg">
                                        Unleash Your Coding Powers
                                    </h3>
                                </div>

                                <div className="space-y-6 text-gray-200 group-hover:text-white transition-colors duration-300">
                                    <p className="text-lg leading-relaxed drop-shadow-md">
                                        Join the ultimate coding battleground where innovation meets creativity. Code Slayer Hackathon brings together the brightest minds to solve real-world challenges across multiple domains.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-primary drop-shadow-md">Duration</h4>
                                                                                  git clone https://github.com/IshaanVerma-29/Code-Slayer.git
                                                                                   // ...existing code...
                                        git clone https://github.com/IshaanVerma-29/Code-Slayer.git
                                        cd Code-Slayer>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-primary drop-shadow-md">Tracks</h4>
                                            <p className="drop-shadow-sm">5 Exciting Categories</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-primary drop-shadow-md">Prizes</h4>
                                            <p className="drop-shadow-sm">₹15,000+ Prize Pool</p>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed drop-shadow-md">
                                        Whether you're passionate about Healthcare, AI/ML, Web3, Open Innovation, or Sustainability - there's a track for you to showcase your skills and make a difference.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Right Side - Hackathon Image */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40 rounded-2xl hover:-rotate-1 p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="C:/Users/ISHAAN/OneDrive/Desktop/CLASSROOM/codeslayerlogo.jpeg"
                                        alt="Code Slayer Hackathon"
                                        className="w-full h-auto object-contain max-h-96 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="mt-6 text-center">
                                    <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300 mb-2 drop-shadow-lg">
                                        Code Slayer Hackathon
                                    </h4>
                                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                                        Where Innovation Meets Excellence
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
