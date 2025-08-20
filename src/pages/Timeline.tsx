import { Sword, Flame, Target, ScrollText, Skull, Zap, Shield, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Timeline = () => {
    // Timeline events with corresponding images
    const timelineData = [
        {
            title: "Registration Starts",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755703486/7e14a5d9-6ece-4855-9811-8a038d977f71.png"
        },
        {
            title: "Idea Submissions Start",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755703656/414bdc37-5ef9-48d0-9f13-0c2d313de2b4.png"
        },
        {
            title: "Registration Deadline",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755703968/deadline_uxu0dp.png"
        },
        {
            title: "Idea Submission Deadline",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755705097/c354fe30-6f3f-42e0-b534-1a37266cc709.png"
        },
        {
            title: "Shortlisted Teams Announcement",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755704984/4e2c4540-55ad-45e4-8df3-446c9a81d656.png"
        },
        {
            title: "Hacking Period Starts",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755705264/ed0a8c7c-50e3-45bb-be66-a28f27e75533.png"
        },
        {
            title: "Final Submission",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755705403/ab69d596-170c-414b-9765-7b0b8afcc5cc.png"
        },
        {
            title: "Final Evaluation Result",
            image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755705521/76e54f30-6d93-4f8f-ac44-379486d9bca9.png"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % timelineData.length
            );
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [timelineData.length]);

    return (
        <>
            <section id="timeline" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Background with Demon Slayer theme overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089315/3_a3nsse.png"
                        alt="Timeline Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Demon Slayer themed overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-red-900/50 to-black/80"></div>
                    {/* Traditional Japanese pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #dc2626 2px, transparent 2px),
                                        radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
                        backgroundSize: '50px 50px',
                        backgroundPosition: '0 0, 25px 25px'
                    }}></div>
                    {/* Flame-like overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-orange-900/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Two-column layout: Timeline on left, Images on right (hidden on mobile) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Timeline Content */}
                        <div className="w-full">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 drop-shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-500 group">
                                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse font-extrabold">
                                    Event Timeline
                                </span>
                                <div className="text-lg md:text-xl mt-2 text-red-300 group-hover:text-red-200 transition-colors duration-300 font-semibold">戦闘のタイムライン</div>

                                {/* Demon Slayer themed decorative elements */}
                                <div className="absolute -top-6 -left-6 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0s' }}></div>
                                <div className="absolute -top-4 -right-8 w-2 h-2 bg-orange-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute -bottom-4 left-10 w-2 h-2 bg-red-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>

                                {/* Sword decorative elements */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                    <Sword className="w-6 h-6 text-red-500 animate-pulse opacity-60" />
                                </div>
                            </h2>

                            <div className="relative">
                                {/* Demon Slayer themed timeline line */}
                                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-2 bg-gradient-to-b from-red-600 via-orange-500 to-red-800 shadow-lg border border-red-900/50">
                                    {/* Flame-like glowing effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-orange-400 to-red-700 blur-sm opacity-60 animate-pulse"></div>
                                    {/* Traditional pattern overlay on timeline */}
                                    <div className="absolute inset-0 opacity-30" style={{
                                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, #dc2626 5px, #dc2626 6px)`,
                                    }}></div>
                                </div>                        <div className="space-y-12 md:space-y-16">
                                    {/* Registration starts */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-red-800/90 to-red-900/90 backdrop-blur-md p-3 rounded-lg border-2 border-red-700/50 hover:border-red-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden">
                                                {/* Demon Slayer pattern overlay */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 10px)`
                                                }}></div>

                                                {/* Flame effects */}
                                                <div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-3 left-4 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="absolute bottom-2 right-6 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-red-300 px-2 py-1 rounded text-xs font-bold border border-red-800 shadow-lg">
                                                    SEP<br />1
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-red-200 mb-1 drop-shadow-lg">Registration Starts</h3>
                                                    <div className="text-sm text-red-300/80 mb-2 font-medium">登録開始</div>
                                                    <p className="text-red-300/90 font-medium text-sm leading-relaxed">The Battle Begins - Register, Team Up, Get Set to Hack!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                            <div className="bg-gradient-to-br from-red-800/90 to-red-900/90 backdrop-blur-md p-4 rounded-lg border-2 border-red-700/50 hover:border-red-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Demon Slayer pattern overlay */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 10px)`
                                                }}></div>

                                                {/* Flame effects */}
                                                <div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-3 left-4 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="absolute bottom-2 right-6 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-red-300 px-2 py-1 rounded text-xs font-bold border border-red-800 shadow-lg">
                                                    SEP<br />1
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-red-200 mb-1 drop-shadow-lg">Registration Starts</h3>
                                                    <div className="text-sm text-red-300/80 mb-2 font-medium">登録開始</div>
                                                    <p className="text-red-300/90 font-medium text-sm leading-relaxed">The Battle Begins - Register, Team Up, Get Set to Hack!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Demon Slayer themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-3 border-orange-400 z-10 shadow-lg shadow-red-500/50 flex items-center justify-center">
                                            <Sword className="w-5 h-5 text-orange-200" />
                                        </div>
                                        <div className="hidden md:block md:flex-1 md:pl-8"></div>
                                    </div>

                                    {/* Idea submissions start */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-orange-800/90 to-red-800/90 backdrop-blur-md p-3 rounded-lg border-2 border-orange-700/50 hover:border-orange-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden">
                                                {/* Traditional wave pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(-45deg, #ea580c 0px, #ea580c 2px, transparent 2px, transparent 12px)`
                                                }}></div>

                                                {/* Fire spirit effects */}
                                                <div className="absolute top-2 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-5 right-12 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute bottom-3 left-8 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.8s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-orange-300 px-2 py-1 rounded text-xs font-bold border border-orange-800 shadow-lg">
                                                    SEP<br />20
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-orange-200 mb-1 drop-shadow-lg">Idea Submissions Start</h3>
                                                    <div className="text-sm text-orange-300/80 mb-2 font-medium">思考開始</div>
                                                    <p className="text-orange-300/90 font-medium text-sm leading-relaxed">Time to Spark Ideas - Let the Innovation Flow!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                        <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                            <div className="bg-gradient-to-br from-orange-800/90 to-red-800/90 backdrop-blur-md p-4 rounded-lg border-2 border-orange-700/50 hover:border-orange-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Traditional wave pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(-45deg, #ea580c 0px, #ea580c 2px, transparent 2px, transparent 12px)`
                                                }}></div>

                                                {/* Fire spirit effects */}
                                                <div className="absolute top-2 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-5 right-12 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute bottom-3 left-8 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.8s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-orange-300 px-2 py-1 rounded text-xs font-bold border border-orange-800 shadow-lg">
                                                    SEP<br />20
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-orange-200 mb-1 drop-shadow-lg">Idea Submissions Start</h3>
                                                    <div className="text-sm text-orange-300/80 mb-2 font-medium">思考開始</div>
                                                    <p className="text-orange-300/90 font-medium text-sm leading-relaxed">Time to Spark Ideas - Let the Innovation Flow!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Flame themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-orange-600 to-red-700 rounded-full border-3 border-yellow-400 z-10 shadow-lg shadow-orange-500/50 flex items-center justify-center">
                                            <Flame className="w-5 h-5 text-yellow-200" />
                                        </div>
                                    </div>

                                    {/* Registration Deadline */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md p-3 rounded-lg border-2 border-gray-600/50 hover:border-gray-400/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-gray-500/30 relative overflow-hidden">
                                                {/* Steel pattern overlay */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(90deg, #4b5563 0px, #4b5563 1px, transparent 1px, transparent 8px)`
                                                }}></div>

                                                {/* Dark energy effects */}
                                                <div className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
                                                <div className="absolute top-4 left-6 w-1 h-1 bg-gray-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.4s' }}></div>
                                                <div className="absolute bottom-3 right-8 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.9s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-gray-300 px-2 py-1 rounded text-xs font-bold border border-gray-700 shadow-lg">
                                                    OCT<br />1
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-gray-200 mb-1 drop-shadow-lg">Registration Deadline</h3>
                                                    <div className="text-sm text-gray-300/80 mb-2 font-medium">登録締切</div>
                                                    <p className="text-gray-300/90 font-medium text-sm leading-relaxed">Last Call to Enter the Code Slayer!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                            <div className="bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md p-4 rounded-lg border-2 border-gray-600/50 hover:border-gray-400/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-gray-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Steel pattern overlay */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(90deg, #4b5563 0px, #4b5563 1px, transparent 1px, transparent 8px)`
                                                }}></div>

                                                {/* Dark energy effects */}
                                                <div className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
                                                <div className="absolute top-4 left-6 w-1 h-1 bg-gray-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.4s' }}></div>
                                                <div className="absolute bottom-3 right-8 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.9s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-gray-300 px-2 py-1 rounded text-xs font-bold border border-gray-700 shadow-lg">
                                                    OCT<br />1
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-gray-200 mb-1 drop-shadow-lg">Registration Deadline</h3>
                                                    <div className="text-sm text-gray-300/80 mb-2 font-medium">登録締切</div>
                                                    <p className="text-gray-300/90 font-medium text-sm leading-relaxed">Last Call to Enter the Code Slayer!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Dark themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-gray-700 to-black rounded-full border-3 border-red-500 z-10 shadow-lg shadow-gray-500/50 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-red-300" />
                                        </div>
                                        <div className="hidden md:block md:flex-1 md:pl-8"></div>
                                    </div>

                                    {/* Idea Submission Deadline */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-yellow-700/90 to-orange-800/90 backdrop-blur-md p-3 rounded-lg border-2 border-yellow-600/50 hover:border-yellow-400/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                                                {/* Lightning pattern overlay */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(135deg, #ca8a04 0px, #ca8a04 2px, transparent 2px, transparent 14px)`
                                                }}></div>

                                                {/* Thunder effects */}
                                                <div className="absolute top-3 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-6 right-8 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="absolute bottom-4 left-6 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.7s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-yellow-300 px-2 py-1 rounded text-xs font-bold border border-yellow-700 shadow-lg">
                                                    OCT<br />5
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-yellow-200 mb-1 drop-shadow-lg">Idea Submission Deadline</h3>
                                                    <div className="text-sm text-yellow-300/80 mb-2 font-medium">思考締切</div>
                                                    <p className="text-yellow-300/90 font-medium text-sm leading-relaxed">Ideas Lock In - Let the Best Concepts Win!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                        <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                            <div className="bg-gradient-to-br from-yellow-700/90 to-orange-800/90 backdrop-blur-md p-4 rounded-lg border-2 border-yellow-600/50 hover:border-yellow-400/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Lightning pattern overlay */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(135deg, #ca8a04 0px, #ca8a04 2px, transparent 2px, transparent 14px)`
                                                }}></div>

                                                {/* Thunder effects */}
                                                <div className="absolute top-3 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-6 right-8 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="absolute bottom-4 left-6 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.7s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-yellow-300 px-2 py-1 rounded text-xs font-bold border border-yellow-700 shadow-lg">
                                                    OCT<br />5
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-yellow-200 mb-1 drop-shadow-lg">Idea Submission Deadline</h3>
                                                    <div className="text-sm text-yellow-300/80 mb-2 font-medium">思考締切</div>
                                                    <p className="text-yellow-300/90 font-medium text-sm leading-relaxed">Ideas Lock In - Let the Best Concepts Win!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Thunder themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-full border-3 border-yellow-300 z-10 shadow-lg shadow-yellow-500/50 flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-yellow-100" />
                                        </div>
                                    </div>

                                    {/* Shortlisted Teams Announcement */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-green-800/90 to-teal-800/90 backdrop-blur-md p-3 rounded-lg border-2 border-green-700/50 hover:border-green-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-green-500/30 relative overflow-hidden">
                                                {/* Water breathing pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(30deg, #166534 0px, #166534 2px, transparent 2px, transparent 16px)`
                                                }}></div>

                                                {/* Water effects */}
                                                <div className="absolute top-2 left-3 w-2 h-2 bg-teal-300 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-5 left-7 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute bottom-3 right-7 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.8s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-green-300 px-2 py-1 rounded text-xs font-bold border border-green-700 shadow-lg">
                                                    OCT<br />15
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-green-200 mb-1 drop-shadow-lg">Shortlisted Teams Announcement</h3>
                                                    <div className="text-sm text-green-300/80 mb-2 font-medium">選抜発表</div>
                                                    <p className="text-green-300/90 font-medium text-sm leading-relaxed">And the Chosen Ones Are... Meet the Finalists!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                            <div className="bg-gradient-to-br from-green-800/90 to-teal-800/90 backdrop-blur-md p-4 rounded-lg border-2 border-green-700/50 hover:border-green-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-green-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Water breathing pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(30deg, #166534 0px, #166534 2px, transparent 2px, transparent 16px)`
                                                }}></div>

                                                {/* Water effects */}
                                                <div className="absolute top-2 left-3 w-2 h-2 bg-teal-300 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-5 left-7 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.3s' }}></div>
                                                <div className="absolute bottom-3 right-7 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.8s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-green-300 px-2 py-1 rounded text-xs font-bold border border-green-700 shadow-lg">
                                                    OCT<br />15
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-green-200 mb-1 drop-shadow-lg">Shortlisted Teams Announcement</h3>
                                                    <div className="text-sm text-green-300/80 mb-2 font-medium">選抜発表</div>
                                                    <p className="text-green-300/90 font-medium text-sm leading-relaxed">And the Chosen Ones Are... Meet the Finalists!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Water themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-green-600 to-teal-700 rounded-full border-3 border-teal-300 z-10 shadow-lg shadow-green-500/50 flex items-center justify-center">
                                            <Shield className="w-5 h-5 text-teal-100" />
                                        </div>
                                        <div className="hidden md:block md:flex-1 md:pl-8"></div>
                                    </div>

                                    {/* Hacking Period Starts */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-red-900/90 to-black/90 backdrop-blur-md p-3 rounded-lg border-2 border-red-800/50 hover:border-red-600/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden">
                                                {/* Demon blood art pattern */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(60deg, #991b1b 0px, #991b1b 2px, transparent 2px, transparent 18px)`
                                                }}></div>

                                                {/* Blood effects */}
                                                <div className="absolute top-3 right-5 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-6 right-9 w-1 h-1 bg-red-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.4s' }}></div>
                                                <div className="absolute bottom-4 left-7 w-1 h-1 bg-red-600 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.9s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-red-300 px-2 py-1 rounded text-xs font-bold border border-red-800 shadow-lg">
                                                    NOV<br />1
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-red-200 mb-1 drop-shadow-lg">Hacking Period Starts</h3>
                                                    <div className="text-sm text-red-300/80 mb-2 font-medium">戦闘開始</div>
                                                    <p className="text-red-300/90 font-medium text-sm leading-relaxed">The Code War Begins - Hack Like There's No Tomorrow!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                        <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                            <div className="bg-gradient-to-br from-red-900/90 to-black/90 backdrop-blur-md p-4 rounded-lg border-2 border-red-800/50 hover:border-red-600/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Demon blood art pattern */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(60deg, #991b1b 0px, #991b1b 2px, transparent 2px, transparent 18px)`
                                                }}></div>

                                                {/* Blood effects */}
                                                <div className="absolute top-3 right-5 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-6 right-9 w-1 h-1 bg-red-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.4s' }}></div>
                                                <div className="absolute bottom-4 left-7 w-1 h-1 bg-red-600 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.9s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-red-300 px-2 py-1 rounded text-xs font-bold border border-red-800 shadow-lg">
                                                    NOV<br />1
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-red-200 mb-1 drop-shadow-lg">Hacking Period Starts</h3>
                                                    <div className="text-sm text-red-300/80 mb-2 font-medium">戦闘開始</div>
                                                    <p className="text-red-300/90 font-medium text-sm leading-relaxed">The Code War Begins - Hack Like There's No Tomorrow!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Blood demon art themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-red-700 to-black rounded-full border-3 border-red-400 z-10 shadow-lg shadow-red-500/50 flex items-center justify-center">
                                            <Skull className="w-5 h-5 text-red-200" />
                                        </div>
                                    </div>

                                    {/* Final Submission */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-purple-800/90 to-indigo-900/90 backdrop-blur-md p-3 rounded-lg border-2 border-purple-700/50 hover:border-purple-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden">
                                                {/* Mist breathing pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(120deg, #6b46c1 0px, #6b46c1 2px, transparent 2px, transparent 20px)`
                                                }}></div>

                                                {/* Mist effects */}
                                                <div className="absolute top-3 left-5 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-6 left-9 w-1 h-1 bg-indigo-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.0s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-purple-300 px-2 py-1 rounded text-xs font-bold border border-purple-700 shadow-lg">
                                                    NOV<br />2
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-purple-200 mb-1 drop-shadow-lg">Final Submission</h3>
                                                    <div className="text-sm text-purple-300/80 mb-2 font-medium">最終提出</div>
                                                    <p className="text-purple-300/90 font-medium text-sm leading-relaxed">One Last Push - Deliver Your Innovation!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                            <div className="bg-gradient-to-br from-purple-800/90 to-indigo-900/90 backdrop-blur-md p-4 rounded-lg border-2 border-purple-700/50 hover:border-purple-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Mist breathing pattern */}
                                                <div className="absolute inset-0 opacity-15" style={{
                                                    backgroundImage: `repeating-linear-gradient(120deg, #6b46c1 0px, #6b46c1 2px, transparent 2px, transparent 20px)`
                                                }}></div>

                                                {/* Mist effects */}
                                                <div className="absolute top-3 left-5 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-70"></div>
                                                <div className="absolute top-6 left-9 w-1 h-1 bg-indigo-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.0s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-purple-300 px-2 py-1 rounded text-xs font-bold border border-purple-700 shadow-lg">
                                                    NOV<br />2
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-purple-200 mb-1 drop-shadow-lg">Final Submission</h3>
                                                    <div className="text-sm text-purple-300/80 mb-2 font-medium">最終提出</div>
                                                    <p className="text-purple-300/90 font-medium text-sm leading-relaxed">One Last Push - Deliver Your Innovation!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Mist themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full border-3 border-purple-300 z-10 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                                            <ScrollText className="w-5 h-5 text-purple-100" />
                                        </div>
                                        <div className="hidden md:block md:flex-1 md:pl-8"></div>
                                    </div>

                                    {/* Final Evaluation Result */}
                                    <div className="relative flex items-center group">
                                        {/* Mobile Layout */}
                                        <div className="block md:hidden w-full pl-12">
                                            <div className="bg-gradient-to-br from-amber-800/90 to-yellow-900/90 backdrop-blur-md p-3 rounded-lg border-2 border-amber-700/50 hover:border-amber-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden">
                                                {/* Sun breathing pattern */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(0deg, #d97706 0px, #d97706 3px, transparent 3px, transparent 22px)`
                                                }}></div>

                                                {/* Golden effects */}
                                                <div className="absolute top-2 right-6 w-3 h-3 bg-amber-300 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-5 right-10 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.6s' }}></div>
                                                <div className="absolute bottom-3 left-8 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.1s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-amber-300 px-2 py-1 rounded text-xs font-bold border border-amber-700 shadow-lg">
                                                    NOV<br />2
                                                </div>
                                                <div className="pr-10 relative z-10">
                                                    <h3 className="text-lg font-bold text-amber-200 mb-1 drop-shadow-lg">Final Evaluation Result</h3>
                                                    <div className="text-sm text-amber-300/80 mb-2 font-medium">勝者決定</div>
                                                    <p className="text-amber-300/90 font-medium text-sm leading-relaxed">The Verdict is In - Witness the Best Rise!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                        <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                            <div className="bg-gradient-to-br from-amber-800/90 to-yellow-900/90 backdrop-blur-md p-4 rounded-lg border-2 border-amber-700/50 hover:border-amber-500/70 hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden max-w-sm w-full">
                                                {/* Sun breathing pattern */}
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: `repeating-linear-gradient(0deg, #d97706 0px, #d97706 3px, transparent 3px, transparent 22px)`
                                                }}></div>

                                                {/* Golden effects */}
                                                <div className="absolute top-2 right-6 w-3 h-3 bg-amber-300 rounded-full animate-pulse opacity-80"></div>
                                                <div className="absolute top-5 right-10 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.6s' }}></div>
                                                <div className="absolute bottom-3 left-8 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.1s' }}></div>

                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-gray-900 to-black text-amber-300 px-2 py-1 rounded text-xs font-bold border border-amber-700 shadow-lg">
                                                    NOV<br />2
                                                </div>
                                                <div className="pr-12 relative z-10">
                                                    <h3 className="text-xl font-bold text-amber-200 mb-1 drop-shadow-lg">Final Evaluation Result</h3>
                                                    <div className="text-sm text-amber-300/80 mb-2 font-medium">勝者決定</div>
                                                    <p className="text-amber-300/90 font-medium text-sm leading-relaxed">The Verdict is In - Witness the Best Rise!</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline dot - Victory themed */}
                                        <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full border-3 border-amber-300 z-10 shadow-lg shadow-amber-500/50 flex items-center justify-center">
                                            <Crown className="w-5 h-5 text-amber-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Rotating Images (Hidden on mobile) */}
                        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-full">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-red-900/50 border-4 border-red-700/50">
                                    {timelineData.map((timelineItem, index) => (
                                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <img
                                                src={timelineItem.image}
                                                alt={`${timelineItem.title} Image`}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Timeline title overlay at bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
                                                <h4 className="text-white font-bold text-lg text-center drop-shadow-lg">
                                                    {timelineItem.title}
                                                </h4>
                                                <div className="w-12 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Demon Slayer themed overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-orange-900/10 pointer-events-none"></div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-80"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-70"></div>

                                    {/* Frame decoration */}
                                    <div className="absolute inset-0 border-2 border-red-600/30 rounded-2xl pointer-events-none"></div>
                                </div>

                                {/* Image indicators */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {timelineData.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? 'bg-red-500 w-6'
                                                : 'bg-red-300/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Thematic text overlay */}
                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-bold text-red-200 mb-2">Timeline Events</h3>
                                    <p className="text-red-300/80 text-sm">イベントのタイムライン</p>
                                    <p className="text-red-300/60 text-xs mt-1">{currentImageIndex + 1} of {timelineData.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
