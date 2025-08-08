import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQs = () => {
    return (
        <>
            {/* Section Separator */}
            <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-500/40 to-blue-600/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
            </div>

            <section id="faqs" className="relative py-20 px-4 overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/faq section vid.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text drop-shadow-lg">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <Card className="p-6 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-blue-500/50 group hover:border-blue-400/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30">
                            <h3 className="text-xl font-semibold text-primary mb-3 drop-shadow-lg">What is Builder Base Hackathon 2024?</h3>
                            <p className="text-gray-300 drop-shadow-md">A 3-day intensive Web3 hackathon where developers, designers, and innovators come together to build the future of decentralized applications.</p>
                        </Card>

                        <Card className="p-6 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-indigo-500/50 group hover:border-indigo-400/80 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/30">
                            <h3 className="text-xl font-semibold text-primary mb-3 drop-shadow-lg">Who can participate?</h3>
                            <p className="text-gray-300 drop-shadow-md">Anyone with a passion for Web3 development! From beginners to experts, we welcome all skill levels. Teams of 2-4 members are encouraged.</p>
                        </Card>

                        <Card className="p-6 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-blue-500/50 group hover:border-blue-400/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30">
                            <h3 className="text-xl font-semibold text-primary mb-3 drop-shadow-lg">Can beginners participate in the hackathon?</h3>
                            <p className="text-gray-300 drop-shadow-md">Absolutely! We encourage beginners to join. Our mentors and workshops are designed to help newcomers learn and build alongside experienced developers.</p>
                        </Card>

                        <Card className="p-6 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-indigo-500/50 group hover:border-indigo-400/80 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/30">
                            <h3 className="text-xl font-semibold text-primary mb-3 drop-shadow-lg">What does the prize pool mean?</h3>
                            <p className="text-gray-300 drop-shadow-md">The prize pool represents the total rewards distributed among winners across different tracks and categories, including cash prizes, mentorship opportunities, and exclusive Builder Base NFTs.</p>
                        </Card>

                        <Card className="p-6 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border border-blue-500/50 group hover:border-blue-400/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30">
                            <h3 className="text-xl font-semibold text-primary mb-3 drop-shadow-lg">How do I register for Builder Base Hackathon 2024?</h3>
                            <p className="text-gray-300 drop-shadow-md">Click the "Enter the Battle" button above to access our registration form. Early registration is recommended as spots are limited!</p>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 cursor-blade transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm border border-green-400/30"
                            onClick={() => window.open('https://chat.whatsapp.com/E28GNRJEjxrGOwZJoAy5bB', '_blank')}
                        >
                            <MessageCircle className="mr-2 h-5 w-5 drop-shadow-lg" />
                            More Questions? Ask us on WhatsApp
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQs;
