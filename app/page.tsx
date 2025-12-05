import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { SchemeMarquee } from "@/components/ui/scheme-marquee";
import { BentoGrid } from "@/components/ui/bento-grid";
import { DemoInterface } from "@/components/ui/demo-interface";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <SchemeMarquee />
      <BentoGrid />
      <DemoInterface />
      <Footer />
    </main>
  );
}
