import type { ReactNode } from 'react';

interface RawDataCardProps {
    header: string;
    content: ReactNode;
}

export function RawDataCard({ header, content }: RawDataCardProps) {
    return (
        <div className="parchment flex-shrink-0 w-[85vw] md:w-[500px] min-h-[500px] md:min-h-[600px] flex flex-col justify-center relative shadow-2xl">
            <div className="parchment-texture absolute inset-0 rounded-[8px_20px_20px_8px] pointer-events-none" />

            <div className="quote-mark open absolute top-[30px] left-[30px] font-tangerine text-[5rem] text-[#8b4513] opacity-40 leading-none">"</div>

            <div className="parchment-content relative z-10 font-tangerine text-[1.8rem] md:text-[2.2rem] leading-relaxed text-[#1a0f05] text-center drop-shadow-sm">
                <div className="content-header font-cinzel text-lg md:text-xl font-semibold text-[#5a3d2b] uppercase tracking-[4px] mb-[30px] pb-[15px] border-b-2 border-[#5a3d2b]/30">
                    {header}
                </div>
                <div className="space-y-5">
                    {content}
                </div>
            </div>

            <div className="quote-mark close absolute bottom-[30px] right-[30px] font-tangerine text-[5rem] text-[#8b4513] opacity-40 leading-none">"</div>
        </div>
    );
}
