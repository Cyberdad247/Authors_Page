import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

const footerLinks = [
  { label: 'Library', href: '#shelf' },
  { label: 'Council', href: '#council' },
  { label: 'Protocol', href: '#magnet' },
  { label: 'Manifesto', href: '#manifesto' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative w-full py-16 lg:py-24 border-t border-white/10 bg-[#0a0505]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF4500]/20 to-[#FFD700]/10 rounded-sm flex items-center justify-center border border-[#FF4500]/30">
                <span className="font-cinzel text-xl text-[#FF4500]">Ω</span>
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  Phoenix Protocol
                </h3>
                <p className="text-xs text-white/50 font-mono">
                  Sovereign Author Platform
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              A tactical blueprint for building digital authority in the age of AI.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#FF4500]/10 hover:text-[#FF4500] transition-colors duration-300 border border-white/10 hover:border-[#FF4500]/30"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-4">
                  Navigate
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-4">
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      The Blueprint
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      Templates
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-4">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-4">
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="mailto:knights@phoenix.io" 
                      className="text-sm text-white/50 hover:text-[#FF4500] transition-colors duration-300"
                    >
                      knights@phoenix.io
                    </a>
                  </li>
                  <li>
                    <span className="text-sm text-white/50">
                      The Round Table
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-white/50">
                      Digital Realm
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Phoenix Protocol. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-mono">
            Crafted by the Knights of the Round Table
          </p>
        </div>
      </div>
    </footer>
  );
}
