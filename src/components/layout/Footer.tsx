import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/images/logo11.svg" alt="" className="h-9 w-auto brightness-0 invert" />
              <span className="text-2xl font-display font-bold text-primary-foreground">FutureTech Africa</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4">
              We build, connect, secure, and support technology for modern African businesses.
            </p>
            <a
              href="mailto:contact@futuretechafrica.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm mb-1"
            >
              <Mail className="w-4 h-4 shrink-0" />
              contact@futuretechafrica.com
            </a>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Reach Us</h4>
            <div className="flex items-start gap-2 text-primary-foreground/70 text-sm mb-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>ERF Academy, Windhoek, Namibia</span>
            </div>
            <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
              <Phone className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <a href="tel:+264817164769" className="block hover:text-accent transition-colors">+264 81 716 4769</a>
                <a href="tel:+264814651384" className="block hover:text-accent transition-colors">+264 81 465 1384</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#team" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Coding & Tech Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} FutureTech Africa. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Building Africa's Technology Future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
