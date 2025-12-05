"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const schemes = [
    {
        title: "Atal Pension Yojana (APY)",
        highlight: "Pension ₹1,000 - ₹5,000/mo",
        desc: "Guaranteed pension for unorganized sector workers (Age 18-40). Spouse receives same pension on death.",
    },
    {
        title: "PM Suraksha Bima Yojana (PMSBY)",
        highlight: "₹2 Lakh Accident Cover",
        desc: "Affordable accidental death & disability insurance for just ₹20 per annum. (Age 18-70).",
    },
    {
        title: "PM Jeevan Jyoti Bima Yojana (PMJJBY)",
        highlight: "₹2 Lakh Life Cover",
        desc: "Pure term life insurance for death due to any reason. Premium ₹436/year. (Age 18-50).",
    },
    {
        title: "PM Kisan Samman Nidhi",
        highlight: "₹6,000/Year Support",
        desc: "100% Govt funded financial support for farmers, transferred directly to bank accounts.",
    },
    {
        title: "Ayushman Bharat (PM-JAY)",
        highlight: "₹5 Lakh Health Cover",
        desc: "Free health insurance coverage per family per year for secondary and tertiary care hospitalization.",
    },
    {
        title: "PM Mitra Scheme",
        highlight: "Textile Industry Growth",
        desc: "Integrated large-scale textile regions to boost the \"Farm to Fiber to Factory to Fashion\" vision.",
    },
    {
        title: "Kisan e-Mitra",
        highlight: "AI Agriculture Assistant",
        desc: "Your virtual assistant for agriculture queries. Available 24/7 with multilingual support.",
    },
]

export function SchemeMarquee() {
    return (
        <section className="w-full overflow-hidden py-10">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="group flex w-full overflow-hidden">
                    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-6 group-hover:[animation-play-state:paused]">
                        {schemes.map((scheme, index) => (
                            <SchemeCard key={`original-${index}`} scheme={scheme} />
                        ))}
                    </div>
                    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-6 group-hover:[animation-play-state:paused] ml-6">
                        {schemes.map((scheme, index) => (
                            <SchemeCard key={`duplicate-${index}`} scheme={scheme} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function SchemeCard({ scheme }: { scheme: typeof schemes[0] }) {
    return (
        <div className="relative flex h-[220px] w-[350px] flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:border-amber-200/30">
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
