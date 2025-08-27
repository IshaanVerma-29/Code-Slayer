import { Card } from "@/components/ui/card";
import { Trophy, Sword, Flame } from "lucide-react";

const Rewards = () => {
    return (
        <>
            <section id="rewards" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Image Background (replaced video) */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089344/5_j2tete.jpg"
                        alt="Rewards Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/75"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-orange-500/10"></div>
                </div>

                {/* Main Rewards Section */}
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
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-primary/50 rounded-xl overflow-hidden group-hover:border-primary/90 transition-all duration-500 shadow-2xl group-hover:shadow-primary/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            CHAMPION
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Trophy className="h-20 w-20 mx-auto text-primary drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Sun Breathing Master</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Runner-up Card */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 via-accent/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-secondary/50 rounded-xl overflow-hidden group-hover:border-secondary/90 transition-all duration-500 shadow-2xl group-hover:shadow-secondary/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            2ND PRIZE
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Sword className="h-20 w-20 mx-auto text-secondary drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Moon Breathing Adept</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Third Place Card */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-accent/50 rounded-xl overflow-hidden group-hover:border-accent/90 transition-all duration-500 shadow-2xl group-hover:shadow-accent/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            3RD PRIZE
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <Flame className="h-20 w-20 mx-auto text-accent drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">Beast Breathing Challenger</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">OF CODE SLAYER HACKATHON 2K25</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Prizes Section */}
                <div className="relative z-10 max-w-6xl mx-auto text-center mt-20">
                    <h3 className="text-2xl font-semibold mb-16 text-gray-200 drop-shadow-lg">
                        Special Prizes for Participants
                        <div className="text-sm mt-1 text-gray-300" style={{ fontSize: "0.8em" }}>
                            参加者特別賞品
                        </div>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
                        {/* Best UI/UX Design */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-purple-500/50 rounded-xl overflow-hidden group-hover:border-purple-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            BEST UI/UX
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-purple-400 drop-shadow-lg">🎨</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg">Creative Vision</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">EXCEPTIONAL USER EXPERIENCE</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹5,000</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Most Innovative Solution */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-cyan-500/50 rounded-xl overflow-hidden group-hover:border-cyan-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            INNOVATION
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-cyan-400 drop-shadow-lg">💡</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">Tech Pioneer</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">BREAKTHROUGH TECHNOLOGY</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹5,000</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Best Presentation */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-green-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-green-500/50 rounded-xl overflow-hidden group-hover:border-green-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-green-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            PRESENTATION
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-green-400 drop-shadow-lg">🎯</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">Storyteller</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">COMPELLING PITCH & DEMO</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹5,000</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* People's Choice Award */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 via-pink-500/30 to-red-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-red-500/50 rounded-xl overflow-hidden group-hover:border-red-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-red-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-red-400 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            PEOPLE'S CHOICE
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-red-400 drop-shadow-lg">❤️</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors duration-300 drop-shadow-lg">Community Favorite</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">VOTED BY PARTICIPANTS</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹3,000</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Best First-Time Hackers */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 via-yellow-500/30 to-orange-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-orange-500/50 rounded-xl overflow-hidden group-hover:border-orange-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-orange-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-orange-400 to-yellow-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            ROOKIE STAR
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-orange-400 drop-shadow-lg">⭐</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 drop-shadow-lg">Rising Star</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">FIRST-TIME HACKERS</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹3,000</div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Best Use of AI/ML */}
                        <div className="group relative cursor-blade perspective-1000">
                            <div className="relative w-full h-[350px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-indigo-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                <Card className="relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border border-indigo-500/50 rounded-xl overflow-hidden group-hover:border-indigo-400/90 transition-all duration-500 shadow-2xl group-hover:shadow-indigo-500/40">
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-indigo-400 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 skew-x-[-8deg] drop-shadow-lg">
                                            AI/ML MASTER
                                        </div>
                                    </div>
                                    <div className="relative p-8 pt-16 h-full flex flex-col justify-center items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <div className="h-20 w-20 mx-auto text-indigo-400 drop-shadow-lg">🤖</div>
                                        </div>
                                        <h4 className="text-1xl font-bold mb-3 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-lg">AI Champion</h4>
                                        <p className="text-sm text-gray-300 mb-6 group-hover:text-white transition-colors duration-300 drop-shadow-md">ARTIFICIAL INTELLIGENCE</p>
                                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">₹5,000</div>
                                    </div>
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