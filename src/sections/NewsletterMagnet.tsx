import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check, Loader2, Sparkles } from 'lucide-react';

// Simple email validation (Zod-like)
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.length >= 5 && emailRegex.test(email);
};

export function NewsletterMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Zod-like validation
    if (!validateEmail(email)) {
      setError('Please enter a valid email address (min 5 chars)');
      return;
    }

    // Optimistic UI - show success immediately
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError('');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      id="magnet"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#0a0505]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF4500]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8">
        <div 
          className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-sm p-8 lg:p-16 overflow-hidden border border-[#FF4500]/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#FF4500]/30" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#FF4500]/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#FF4500]/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#FF4500]/30" />

          {/* Sparkle decorations */}
          <Sparkles className="absolute top-8 right-8 w-5 h-5 text-[#FF4500]/40 animate-pulse" />
          <Sparkles className="absolute bottom-8 left-8 w-4 h-4 text-[#FFD700]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />

          <div className="relative z-10 text-center">
            {!isSuccess ? (
              <>
                {/* Header */}
                <div 
                  className={`mb-8 transition-all duration-700 delay-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-mono text-[#FF4500] uppercase tracking-widest border border-[#FF4500]/30 rounded-full">
                    <Mail className="w-4 h-4" />
                    The Omega Protocol
                  </span>
                  <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Receive the <span className="text-phoenix-gradient">Blueprint</span>
                  </h2>
                  <p className="text-white/60 max-w-lg mx-auto">
                    Enter the council. Get the complete Sovereign Author Protocol delivered to your inbox. 
                    No spam. Only wisdom.
                  </p>
                </div>

                {/* Form */}
                <form 
                  onSubmit={handleSubmit}
                  className={`max-w-md mx-auto transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        className={`w-full bg-transparent border-0 border-b-2 rounded-none px-0 py-3 text-white placeholder:text-white/30 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors ${
                          error 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-[#FF4500]/30 focus:border-[#FF4500]'
                        }`}
                      />
                      {error && (
                        <p className="absolute -bottom-6 left-0 text-xs text-red-400">
                          {error}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold px-8 py-3 rounded-sm transition-all duration-300 hover:from-[#FF6B00] hover:to-[#FF4500] hover:shadow-[0_0_30px_rgba(255,69,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Initiating...
                        </>
                      ) : (
                        'Initiate'
                      )}
                    </Button>
                  </div>
                </form>

                {/* Trust indicators */}
                <div 
                  className={`mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40 transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4500]" />
                    Instant delivery
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4500]" />
                    No spam, ever
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4500]" />
                    Unsubscribe anytime
                  </span>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FF4500]/20 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#FF4500]" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
                  Welcome to the Round Table
                </h3>
                <p className="text-white/60 mb-6">
                  The Omega Protocol has been dispatched to your inbox. Check your email for the blueprint.
                </p>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="border-[#FF4500]/30 text-[#FF4500] hover:bg-[#FF4500]/10"
                >
                  Subscribe another email
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
