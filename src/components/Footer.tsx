import { Button } from "@/components/ui/button";
import { Sword, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card/80 backdrop-blur-md py-16 px-4 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                            <Sword className="h-8 w-8 text-primary animate-mystical-pulse" />
                            <span className="font-cinzel font-bold text-2xl demon-text">Devsphere</span>
                        </div>
                        <p className="text-muted-foreground mb-4">Forged in fire. Powered by code.</p>
                        <p className="text-sm text-muted-foreground">We are the battleground.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="/" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Home</a>
                            <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">About</a>
                            <a href="/timeline" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Timeline</a>
                            <a href="/tracks" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Tracks</a>
                            <a href="/team" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Team</a>
                            <a href="/faqs" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">FAQs</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-4">Contact</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-accent" />
                                <p className="text-sm">DELHI</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-accent" />
                                <p className="text-sm">devsphereindia25@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-accent" />
                                <p className="text-sm">9716387381 (Nisha kumari)</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-accent" />
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

                <div className="border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">© 2025 Code Slayer Hackathon. Built with ❤️ by Developer Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
