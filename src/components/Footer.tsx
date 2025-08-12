import { Button } from "@/components/ui/button";
import { Sword, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-card/80 backdrop-blur-md py-16 px-4 border-t border-border">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="public/9.jpg"
                    alt="Footer Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                            <Sword className="h-8 w-8 text-primary animate-mystical-pulse" />
                            <span className="font-cinzel font-bold text-2xl demon-text" data-text="Devsphere">Devsphere</span>
                        </div>
                        <p className="text-muted-foreground mb-4">Forged in fire. Powered by code.</p>
                        <p className="text-sm text-muted-foreground">We are the battleground.</p>
                        
                        {/* Added Logo/Image */}
                        <div className="mt-6 p-2 bg-card/50 rounded-lg border border-primary/20 inline-block">
                            <img 
                                src="/hackathon logo.png" 
                                alt="Hackathon Logo" 
                                className="h-24 w-auto object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-4 relative overflow-hidden group">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                        </h4>
                        <div className="space-y-2">
                            <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">Home</a>
                            <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">About</a>
                            <a href="#timeline" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">Timeline</a>
                            <a href="#tracks" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">Tracks</a>
                            <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">Team</a>
                            <a href="#faqs" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade hover:translate-x-1 duration-300">FAQs</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-4 relative overflow-hidden group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                        </h4>
                        <div className="space-y-2 text-muted-foreground">
                            <div className="flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                                <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <p className="text-sm">DELHI</p>
                            </div>
                            <div className="flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                                <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <a 
                                    href="mailto:devsphereindia25@gmail.com" 
                                    className="text-sm hover:text-primary transition-colors duration-300"
                                >
                                    devsphereindia25@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                                <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <p className="text-sm">9716387381 (Nisha kumari)</p>
                            </div>
                            <div className="flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                                <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                                <p className="text-sm">9983750681 (Arabhay Aggarwal)</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-4">Join WhatsApp</h4>
                        <Button
                            className="w-full bg-green-500 hover:bg-green-600 text-white cursor-blade mb-4 transition-all duration-300 hover:scale-105"
                            onClick={() => window.open('https://chat.whatsapp.com/E28GNRJEjxrGOwZJoAy5bB', '_blank')}
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Connect Now
                        </Button>
                    </div>
                </div>
                
                <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
                    <p>© 2025 Code Slayer Hackathon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
