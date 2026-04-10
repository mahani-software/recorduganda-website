import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, HandHeart, ShieldCheck, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/", icon: Home },
  { label: "What We Do", to: "/what-we-do", icon: HandHeart },
  { label: "Privacy & Values", to: "/privacy", icon: ShieldCheck },
  { label: "Donate", to: "/donate", icon: Heart },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810984/logo_insugo.png"
            alt="RECORD Uganda Logo"
            className="h-14 w-14 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-bold text-foreground leading-tight">RECORD</p>
            <p className="text-xs text-muted-foreground leading-tight max-w-[180px]">
              Refugee Community for Resilience & Development
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Flag + Uganda */}
        <div className="hidden md:flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810986/uganda-flag_gstbpm.gif"
            alt="Uganda Flag"
            className="h-8 w-12 object-cover rounded shadow-sm"
          />
          <span className="font-heading text-sm font-bold text-foreground">UGANDA</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in-up">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <img
              src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810986/uganda-flag_gstbpm.gif"
              alt="Uganda Flag"
              className="h-6 w-10 object-cover rounded"
            />
            <span className="font-heading text-sm font-bold">UGANDA</span>
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
