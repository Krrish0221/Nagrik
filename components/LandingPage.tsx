"use client"

import { useState, useCallback } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { SchemeMarquee } from "@/components/ui/scheme-marquee";
import { BentoGrid } from "@/components/ui/bento-grid";
import { DemoInterface } from "@/components/ui/demo-interface";
import { Footer } from "@/components/ui/footer";

export function LandingPage() {
    const [voiceTrigger, setVoiceTrigger] = useState<string | null>(null);

    const handleVoiceTriggerClear = useCallback(() => {
        setVoiceTrigger(null);
    }, []);

    return (
        <main className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
            <Navbar />
            <Hero onVoiceTrigger={setVoiceTrigger} />
            <SchemeMarquee />
            <BentoGrid />
            <DemoInterface voiceTrigger={voiceTrigger} onVoiceTriggerClear={handleVoiceTriggerClear} />
            <Footer />
        </main>
    );
}
