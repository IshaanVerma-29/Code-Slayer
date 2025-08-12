import { Card } from "@/components/ui/card";

const Sponsors = () => {
    return (
        <>
            <section id="sponsors" className="relative py-20 px-4 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/6.jpg"
                        alt="Sponsor Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-cinzel font-bold mb-16 demon-text drop-shadow-lg">
                        Our Sponsors
                        <div className="text-base mt-2 text-gray-300" style={{ fontSize: "0.85em" }}>
                            私たちのスポンサー
                        </div>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <Card className="p-8 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-purple-500/50 group hover:border-purple-400/80 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30">
                            <div className="h-16 flex items-center justify-center">
                                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform drop-shadow-lg">Sponsor 1</div>
                            </div>
                        </Card>
                        <Card className="p-8 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-blue-500/50 group hover:border-blue-400/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30">
                            <div className="h-16 flex items-center justify-center">
                                <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform drop-shadow-lg">Sponsor 2</div>
                            </div>
                        </Card>
                        <Card className="p-8 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-purple-500/50 group hover:border-purple-400/80 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30">
                            <div className="h-16 flex items-center justify-center">
                                <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform drop-shadow-lg">Sponsor 3</div>
                            </div>
                        </Card>
                        <Card className="p-8 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-blue-500/50 group hover:border-blue-400/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30">
                            <div className="h-16 flex items-center justify-center">
                                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform drop-shadow-lg">Sponsor 4</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsors;
