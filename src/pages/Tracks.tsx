import { Card } from "@/components/ui/card";

const Tracks = () => {
    return (
        <>
            <section id="tracks" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Image Background (replaced video) */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/4.jpg" 
                        alt="Tracks Background"
                        className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
                        loading="lazy"
                    />
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/65"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/15 via-transparent to-primary/15"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text drop-shadow-2xl flex flex-col items-center" data-text="Hackathon Tracks">
                        Hackathon Tracks
                        <div className="text-base mt-1 text-gray-300" style={{ fontSize: "0.85em" }}>
                            ハッカソンのトラック
                        </div>
                    </h2>
                    <div className="text-center mb-16">
                        <div className="inline-block bg-primary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/40 transition-colors duration-300 hover:scale-105 transform">
                            <span className="text-primary font-semibold drop-shadow-md">
                                Choose Your Path
                                <div style={{ fontSize: "0.8em" }} className="text-primary/80 mt-1">
                                    あなたの道を選んでください
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Health Tech */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-4 border-pink-200/50 hover:border-pink-400/70 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 rounded-2xl hover:rotate-1 hover:bg-card/95">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-pink-100/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <span className="text-pink-500 font-bold drop-shadow-sm">→</span>
                                </div>
                            </div>
                            <div className="relative p-8 pt-16 text-center z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pink-100/30 backdrop-blur-sm border border-pink-200/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/30 overflow-hidden">
                                    <img
                                        src="/healthcare.png"
                                        alt="Healthcare Technology"
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg">Healthcare</h3>
                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">Transform healthcare with technology: patient care, data, and wellness.</p>
                            </div>
                        </Card>

                        {/* AI & ML */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-4 border-purple-200/50 hover:border-purple-400/70 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 rounded-2xl hover:-rotate-1 hover:bg-card/95">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-purple-100/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <span className="text-purple-500 font-bold drop-shadow-sm">→</span>
                                </div>
                            </div>
                            <div className="relative p-8 pt-16 text-center z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-purple-100/30 backdrop-blur-sm border border-purple-200/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 overflow-hidden">
                                    <img
                                        src="/ai ml.png"
                                        alt="AI & Machine Learning"
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300 drop-shadow-lg">AI/ML</h3>
                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">Build intelligent systems: machine learning, automation, and smart apps.</p>
                            </div>
                        </Card>

                        {/* Web3 Development */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-4 border-blue-200/50 hover:border-blue-400/70 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 rounded-2xl hover:rotate-1 hover:bg-card/95">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-blue-100/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <span className="text-blue-500 font-bold drop-shadow-sm">→</span>
                                </div>
                            </div>
                            <div className="relative p-8 pt-16 text-center z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-blue-100/30 backdrop-blur-sm border border-blue-200/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 overflow-hidden">
                                    <img
                                        src="/web3.png"
                                        alt="Web3 Development"
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg">Web3 Development</h3>
                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">Build decentralized applications and blockchain solutions for the future.</p>
                            </div>
                        </Card>

                        {/* Open Innovation */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-4 border-orange-200/50 hover:border-orange-400/70 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 rounded-2xl hover:-rotate-1 hover:bg-card/95">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-orange-100/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <span className="text-orange-500 font-bold drop-shadow-sm">→</span>
                                </div>
                            </div>
                            <div className="relative p-8 pt-16 text-center z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-orange-100/30 backdrop-blur-sm border border-orange-200/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/30 overflow-hidden">
                                    <img
                                        src="/open innovation.png"
                                        alt="Open Innovation"
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-lg">Open Innovation</h3>
                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">Create groundbreaking solutions across any domain with unlimited creativity.</p>
                            </div>
                        </Card>

                        {/* Sustainability */}
                        <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-md border-4 border-green-200/50 hover:border-green-400/70 transition-all duration-500 cursor-blade hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 rounded-2xl hover:rotate-1 hover:bg-card/95">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-green-100/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <span className="text-green-500 font-bold drop-shadow-sm">→</span>
                                </div>
                            </div>
                            <div className="relative p-8 pt-16 text-center z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-green-100/30 backdrop-blur-sm border border-green-200/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-green-500/30 overflow-hidden">
                                    <img
                                        src="/sustainability.png"
                                        alt="Sustainability"
                                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300 drop-shadow-lg">Sustainability</h3>
                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">Innovate for a greener future: energy, environment, and sustainable solutions.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tracks;
