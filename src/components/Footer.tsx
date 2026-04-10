import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-dark text-dark-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810984/logo_insugo.png"
                  alt="RECORD Logo"
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-heading text-gold font-bold text-lg">RECORD</p>
                  <p className="text-sm text-gold-light/70">Uganda</p>
                </div>
              </div>
              <p className="text-sm text-gold-light/60 leading-relaxed">
                Refugee Community for Resilience & Development — building capacity and competence to positively change lives in Kamwenge District.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading text-gold font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "What We Do", to: "/what-we-do" },
                  { label: "Privacy & Values", to: "/privacy" },
                  { label: "Donate", to: "/donate" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-gold-light/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-gold font-bold mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3 text-sm text-gold-light/60">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>Nkoma Katalyeba Town Council, Kamwenge District, Uganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>info@recorduganda.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+256 XXX XXX XXX</span>
                </div>
              </div>

              <Link
                to="/donate"
                className="mt-6 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Heart size={16} />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gold-light/40">
            © {new Date().getFullYear()} RECORD Uganda. All rights reserved.
          </p>
          <p className="text-xs text-gold-light/40">
            Building resilience, transforming communities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
