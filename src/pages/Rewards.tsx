import { Card } from "@/components/ui/card";
import { Trophy, Sword, Flame } from "lucide-react";

const Rewards = () => {
    return (
        <>
            <section id="rewards" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/rewards section vid.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/75"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-orange-500/10"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-cinzel font-bold mb-6 demon-text drop-shadow-2xl">
                        Prize Pool
                        <div className="text-base mt-1 text-gray-300" style={{ fontSize: "0.85em" }}>
                            賞金総額
                        </div>
                    </h2>
                    <h3 className="text-2xl font-semibold mb-16 text-gray-200 drop-shadow-lg">
                        Main Tournament Prizes
                        <div className="text-sm mt-1 text-gray-300" style={{ fontSize: "0.8em" }}>
                            メイントーナメント賞品
                        </div>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
                        {/* Champion Card */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                                {/* Border Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                                {/* Main Card */}
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-primary/50 rounded-xl overflow-hidden group-hover:border-primary/90 transition-all duration-500 shadow-2xl group-hover:shadow-primary/40">
                                    {/* Top Badge */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            CHAMPION
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Trophy className="h-20 w-20 mx-auto text-primary drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Lone Survivor</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                        <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹15,000</div>
                                    </div>

                                    {/* Animated Elements */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Card>
                            </div>
                        </div>

                        {/* Runner-up Card */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 via-accent/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                                {/* Border Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                                {/* Main Card */}
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-secondary/50 rounded-xl overflow-hidden group-hover:border-secondary/90 transition-all duration-500 shadow-2xl group-hover:shadow-secondary/40">
                                    {/* Top Badge */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            RUNNER-UP
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Sword className="h-20 w-20 mx-auto text-secondary drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Top Fragger</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                        <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹10,000</div>
                                    </div>

                                    {/* Animated Elements */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Card>
                            </div>
                        </div>

                        {/* Third Place Card */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                                {/* Border Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                                {/* Main Card */}
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-accent/50 rounded-xl overflow-hidden group-hover:border-accent/90 transition-all duration-500 shadow-2xl group-hover:shadow-accent/40">
                                    {/* Top Badge */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            3RD PLACE
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Flame className="h-20 w-20 mx-auto text-accent drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Rising Slayer</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                        <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹5,000</div>
                                    </div>

                                    {/* Animated Elements */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rewards;
