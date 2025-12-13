"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { schemesData, type Scheme } from "@/lib/schemesData"
import { SchemeModal } from "./scheme-modal"

export function SchemeMarquee() {
    const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSchemeClick = (scheme: Scheme) => {
        setSelectedScheme(scheme)
        setIsModalOpen(true)
    }

    return (
        <>
            <section className="w-full overflow-hidden py-10">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex w-full overflow-hidden">
                        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-6 group-hover:[animation-play-state:paused]">
                            {schemesData.map((scheme, index) => (
                                <SchemeCard
                                    key={`original-${index}`}
                                    scheme={scheme}
                                    onClick={() => handleSchemeClick(scheme)}
                                />
                            ))}
                        </div>
                        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-6 group-hover:[animation-play-state:paused] ml-6">
                            {schemesData.map((scheme, index) => (
                                <SchemeCard
                                    key={`duplicate-${index}`}
                                    scheme={scheme}
                                    onClick={() => handleSchemeClick(scheme)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SchemeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                scheme={selectedScheme}
            />
        </>
    )
}

function SchemeCard({ scheme, onClick }: { scheme: Scheme; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="relative flex h-[220px] w-[350px] flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:border-amber-200/30 cursor-pointer"
        >
            <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{scheme.title}</h3>
                <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    {scheme.highlight}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{scheme.desc}</p>
            </div>
            <button className="group/btn mt-4 flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700">
                Know More
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
        </div>
    )
}
