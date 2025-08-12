const Timeline = () => {
    return (
        <>
            <section id="timeline" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/3.png"
                        alt="Timeline Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-accent/15"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text drop-shadow-2xl flex flex-col items-center">

                        Event Timeline
                        <div className="text-base mt-1 text-gray-300" style={{ fontSize: '0.8em' }}>イベントタイムライン</div>
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary shadow-lg"></div>

                        <div className="space-y-12">
                            {/* Day 1 */}
                            <div className="relative flex items-center">
                                <div className="flex-1 pr-8 text-right">
                                    <div className="bg-card/90 backdrop-blur-md p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                                        <h3 className="text-2xl font-bold text-primary mb-4 drop-shadow-lg">DAY 1</h3>
                                        <h4 className="text-xl font-semibold mb-3 text-white drop-shadow-md">Opening Ceremony</h4>
                                        <div className="space-y-2 text-gray-200">
                                            <p className="drop-shadow-sm">10:00 AM - Welcome and rules explanation</p>
                                            <p className="drop-shadow-sm">11:00 AM - Team formation</p>
                                            <p className="drop-shadow-sm">12:00 PM - Hacking begins!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 shadow-lg shadow-primary/50"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            {/* Day 2 */}
                            <div className="relative flex items-center">
                                <div className="flex-1 pr-8"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-background z-10 shadow-lg shadow-secondary/50"></div>
                                <div className="flex-1 pl-8">
                                    <div className="bg-card/90 backdrop-blur-md p-6 rounded-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30">
                                        <h3 className="text-2xl font-bold text-secondary mb-4 drop-shadow-lg">DAY 2</h3>
                                        <h4 className="text-xl font-semibold mb-3 text-white drop-shadow-md">Midpoint Check-in</h4>
                                        <div className="space-y-2 text-gray-200">
                                            <p className="drop-shadow-sm">10:00 AM - Progress presentations</p>
                                            <p className="drop-shadow-sm">12:00 PM - Workshop: Advanced combat mechanics</p>
                                            <p className="drop-shadow-sm">6:00 PM - Kimetsu no Yaiba exhibition match</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 3 */}
                            <div className="relative flex items-center">
                                <div className="flex-1 pr-8 text-right">
                                    <div className="bg-card/90 backdrop-blur-md p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                                        <h3 className="text-2xl font-bold text-primary mb-4 drop-shadow-lg">DAY 3</h3>
                                        <h4 className="text-xl font-semibold mb-3 text-white drop-shadow-md">Final Battle</h4>
                                        <div className="space-y-2 text-gray-200">
                                            <p className="drop-shadow-sm">10:00 AM - Final presentations</p>
                                            <p className="drop-shadow-sm">2:00 PM - Judging & evaluation</p>
                                            <p className="drop-shadow-sm">5:00 PM - Awards ceremony</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 shadow-lg shadow-primary/50"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
