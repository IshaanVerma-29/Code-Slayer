const Timeline = () => {
    return (
        <>
            {/* Section Separator */}
            <div className="relative h-32 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/30 to-primary/20"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 border-2 border-secondary/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-card/20">
                        <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full animate-mystical-pulse"></div>
                    </div>
                </div>
            </div>

            <section id="timeline" className="relative py-20 px-4 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/timeline section vid.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-accent/15"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text drop-shadow-2xl">
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
                                        <h3 className="text-2xl font-bold text-primary mb-4 drop-shadow-lg">
                                            DAY 1
                                            <div className="text-base mt-1 text-gray-300" style={{ fontSize: '0.8em' }}>１日目</div>
                                        </h3>
                                        <h4 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                                            Opening Ceremony
                                            <div className="text-base mt-1 text-gray-300" style={{ fontSize: '0.8em' }}>開会式</div>
                                        </h4>
                                        <div className="space-y-2 text-gray-200">
                                            <p className="drop-shadow-sm">
                                                10:00 AM - Welcome and rules explanation
                                                <span className="block text-xs text-gray-300" style={{ fontSize: '0.8em' }}>午前10時 - 歓迎とルール説明</span>
                                            </p>
                                            <p className="drop-shadow-sm">
                                                11:00 AM - Team formation
                                                <span className="block text-xs text-gray-300" style={{ fontSize: '0.8em' }}>午前11時 - チーム編成</span>
                                            </p>
                                            <p className="drop-shadow-sm">
                                                12:00 PM - Hacking begins!
                                                <span className="block text-xs text-gray-300" style={{ fontSize: '0.8em' }}>正午12時 - ハッキング開始！</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 shadow-lg shadow-primary/50"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>
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
