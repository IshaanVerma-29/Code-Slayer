import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href: string; // either "#section" or "/route" or an absolute url
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Keep section anchors that scroll on the same page
  const navItems: NavItem[] = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "TRACKS", href: "#tracks" },
    { name: "REWARDS", href: "#rewards" },
    { name: "SPONSORS", href: "#sponsors" },
    { name: "TEAM", href: "#team" },
    { name: "FAQS", href: "#faqs" },
  ];

  // Add any internal app routes (rendered with <Link>)
  const routeItems: NavItem[] = [
    { name: "BATCH GENERATOR", href: "/batch-generator" }, // NEW: integrated route
  ];

  // Combined view order (you can reorder as needed)
  const desktopItems = [...navItems, ...routeItems];

  const renderNavLink = (item: NavItem, onClick?: () => void) => {
    // If starts with '/', treat as React Router route link
    if (item.href.startsWith("/")) {
      return (
        <Link
          key={item.name}
          to={item.href}
          onClick={onClick}
          className="relative group px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-blade"
        >
          <span className="relative z-10">{item.name}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
          <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
        </Link>
      );
    }

    // For hash anchors or external links (doesn't start with '/')
    return (
      <a
        key={item.name}
        href={item.href}
        onClick={onClick}
        className="relative group px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-blade"
      >
        <span className="relative z-10">{item.name}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              <img
                src="/hackathon logo.png"
                alt="Code Slayer Hackathon Logo"
                className="relative h-12 w-12 object-contain animate-mystical-pulse group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code Slayer Hackathon
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {desktopItems.map((item) => renderNavLink(item))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 cursor-blade group"
              onClick={() => window.open("https://chat.whatsapp.com/E28GNRJEjxrGOwZJoAy5bB", "_blank")}
            >
              <LogIn className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>CONTACT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-blade text-white hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/98 to-black/98 backdrop-blur-xl border-t border-primary/20 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Render the same items for mobile; clicking closes the menu */}
            {[...navItems, ...routeItems].map((item) => {
              // For route links, use Link; else anchor
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block relative group px-4 py-3 text-base font-semibold text-gray-300 hover:text-white rounded-lg transition-all duration-300 cursor-blade"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </Link>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block relative group px-4 py-3 text-base font-semibold text-gray-300 hover:text-white rounded-lg transition-all duration-300 cursor-blade"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              );
            })}
            <div className="pt-4 border-t border-primary/20">
              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-blade"
                onClick={() => {
                  window.open("https://chat.whatsapp.com/E28GNRJEjxrGOwZJoAy5bB", "_blank");
                  setIsOpen(false);
                }}
              >
                <LogIn className="mr-2 h-4 w-4" />
                CONTACT
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
