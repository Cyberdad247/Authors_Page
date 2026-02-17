import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Library', href: '#shelf' },
  { label: 'Council', href: '#council' },
  { label: 'Protocol', href: '#magnet' },
  { label: 'Manifesto', href: '#manifesto' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0505]/90 backdrop-blur-md border-b border-[#FF4500]/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-gradient-to-br from-[#FF4500]/20 to-[#FFD700]/10 border border-[#FF4500]/30">
                <span className="font-cinzel text-lg text-[#FF4500]">Ω</span>
              </div>
              <span className="font-cinzel font-bold text-white group-hover:text-[#FF4500] transition-colors">
                Phoenix
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-white/70 hover:text-[#FF4500] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#magnet')}
                size="sm"
                className="bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold px-6 rounded-sm hover:from-[#FF6B00] hover:to-[#FF4500] transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0a0505]/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[#0a0505] border-b border-[#FF4500]/30 shadow-xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-lg font-medium text-white hover:text-[#FF4500] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#magnet')}
              className="w-full bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold py-3 rounded-sm"
            >
              Join the Round Table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
