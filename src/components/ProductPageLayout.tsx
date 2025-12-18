import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import Link from "next/link";
import { Check } from "lucide-react";

interface Props {
    title: string;
    desc: string;
    features: string[];
    workflow: { title: string; desc: string }[];
    bestFor: string[];
}

export function ProductPageLayout({ title, desc, features, workflow, bestFor }: Props) {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                {/* Hero */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold1 via-white to-gold2 mb-6 pb-2">
                        {title}
                    </h1>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        {desc}
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <GoldButton className="!px-10 !py-4 !text-base shadow-[0_0_30px_rgba(214,168,79,0.3)]">
                                Request Demo
                            </GoldButton>
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="bg-panel2 p-8 md:p-12 rounded-lg border border-gold3/20 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Capabilities</h3>
                        <ul className="space-y-4">
                            {features.map(f => (
                                <li key={f} className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-ok/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-ok" />
                                    </div>
                                    <span className="text-gray-300 text-lg">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Abstract Visual Placeholder */}
                    <div className="relative h-[400px] bg-panel rounded-lg border border-white/5 flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold3/20 via-bg to-bg opacity-50"></div>
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                        <div className="text-gold1/10 font-black text-8xl md:text-9xl uppercase select-none transform -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                            Module
                        </div>
                        <div className="absolute bottom-8 right-8 text-gold2 text-sm uppercase tracking-widest font-bold border border-gold2 px-4 py-2 rounded">
                            {title.split(' ')[0]} v2.0
                        </div>
                    </div>
                </div>

                {/* Workflow */}
                <div className="mb-24">
                    <SectionTitle subtitle="How it integrates into your daily production.">Workflow</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {workflow.map((w, i) => (
                            <div key={i} className="relative p-8 pt-12 bg-panel rounded border border-white/5 border-t-gold1/50 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 rounded-full bg-panel border-2 border-gold1 text-gold1 flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(214,168,79,0.3)]">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{w.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Best For */}
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-panel2 to-panel p-12 rounded-lg border border-gold3/20 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-8">Best Suited For</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {bestFor.map(b => (
                            <span key={b} className="px-6 py-3 bg-black/50 rounded-full border border-gold2/30 text-gold1 uppercase tracking-wider text-xs md:text-sm font-bold shadow-inner">
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
