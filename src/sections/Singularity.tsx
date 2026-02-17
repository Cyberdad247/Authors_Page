import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Check } from 'lucide-react';

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length >= 5 && emailRegex.test(email);
};

export function Singularity() {
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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!validateEmail(email)) {
            setError('Invalid coordinates. Check email format.');
            return;
        }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setEmail('');
    };

    return (
        <section
            ref={sectionRef}
            id="singularity"
            className="relative w-full py-32 overflow-hidden bg-[#0a0505]"
        >
            {/* Background - Green Cosmic Nebula / Singularity */}
            <div className="absolute inset-0 z-0">
                {/* Green Nebula */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(16,185,129,0.25),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,185,129,0.05),transparent)]" />

                {/* Stars / Matrix dust */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.15 }} />
            </div>

            {/* Connection Beam from Alchemy Lab */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#10B981] to-[#10B981]/0 opacity-60 blur-sm z-10" />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">

                {/* Section Label */}
                <div className={`absolute top-0 left-6 lg:left-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <span className="text-xs font-mono text-[#10B981] uppercase tracking-widest pl-2 border-l-2 border-[#10B981]">
                        The Singularity
                    </span>
                </div>

                {/* Content */}
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <h2 className="font-cinzel text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wide drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                        Secure Your Seat on the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">Flight.</span>
                    </h2>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981] to-[#059669] opacity-30 blur-lg transition duration-500 group-hover:opacity-50" />

                            <div className="relative flex items-center bg-black/80 border border-[#10B981]/30 rounded-full p-2 pl-6 focus-within:border-[#10B981] transition-colors">
                                <Input
                                    type="email"
                                    placeholder="Enter Email to Defrag History."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    className="bg-transparent border-0 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 font-mono text-sm"
                                />
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`rounded-full px-8 py-6 font-bold tracking-widest transition-all duration-300 ${isSubmitting
                                        ? 'bg-[#10B981]/20 text-[#10B981] cursor-not-allowed'
                                        : 'bg-[#10B981] hover:bg-[#059669] text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]'
                                        }`}
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : 'ENGAGE'}
                                </Button>
                            </div>
                            {error && <p className="absolute -bottom-6 left-6 text-xs text-red-400 font-mono">{error}</p>}
                        </form>
                    ) : (
                        <div className="max-w-md mx-auto p-6 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl animate-in fade-in zoom-in duration-500">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_#10B981]">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <h3 className="font-cinzel text-xl text-white font-bold">Protocol Initiated</h3>
                                <p className="text-white/60 text-sm">Coordinates locked. Welcome to the flight.</p>
                                <Button onClick={() => setIsSuccess(false)} variant="link" className="text-[#10B981] text-xs">Register another frequency</Button>
                            </div>
                        </div>
                    )}

                </div>

                {/* Decorative Compass / Star at bottom right */}
                <div className="absolute bottom-10 right-10 opacity-50 animate-pulse-slow pointer-events-none">
                    <Sparkles className="w-12 h-12 text-[#10B981]" />
                </div>

            </div>
        </section>
    );
}
