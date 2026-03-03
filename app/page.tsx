import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="border-t border-neutral-100 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} FlowDesk. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              Terms
            </Link>
            <Link href="/sms" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              SMS Program
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
