import { SectionTitle } from "@/components/SectionTitle";
import { Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                    <SectionTitle subtitle="From the production floor to the cloud.">Our Story</SectionTitle>
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                        With over <span className="text-gold1 font-semibold">25+ years of industry experience</span>, we don't just build software—we codify expertise.
                    </p>
                    <p className="text-muted text-lg leading-relaxed">
                        Mithronix was born from a simple observation: The garment industry deserves better tools. Tools that are precise enough for a master screen printer, yet powerful enough for a global factory manager.
                    </p>
                </div>

                {/* Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="bg-panel2 p-8 md:p-12 rounded-lg border border-gold3/20 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Shield className="text-gold1 w-6 h-6" /> Our Mission
                        </h3>
                        <p className="text-muted leading-relaxed mb-6">
                            To bridge the gap between creative design and industrial manufacturing. We build the ecosystem that connects your CorelDRAW artwork directly to your production line, eliminating the "translation errors" that cost time and money.
                        </p>
                        <p className="text-muted leading-relaxed">
                            Whether it's the <strong>Smart Save Suite</strong> automating your prepress, or the <strong>Seps Engine</strong> delivering photorealistic separations, every pixel is engineered for profit.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded bg-gold3/10 flex items-center justify-center flex-shrink-0 text-gold1">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Consistency</h4>
                                <p className="text-sm text-muted">Standardize your output. Whether you have 1 designer or 100, our tools ensure every file meets the same rigorous quality standard.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded bg-gold3/10 flex items-center justify-center flex-shrink-0 text-gold1">
                                <Shield className="w-6 h-6" /> {/* Reusing icon for visual consistency or swapping if needed */}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Speed</h4>
                                <p className="text-sm text-muted">Time is the only asset you can't buy. We turn hour-long tasks into one-click operations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Mithronix */}
                <div className="bg-panel border border-white/5 rounded-lg p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold1 to-transparent opacity-50"></div>
                    <h3 className="text-3xl font-bold text-white mb-12">Why Industry Leaders Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-bg/50 rounded border border-white/5 hover:border-gold1/30 transition-colors">
                            <h4 className="text-gold1 font-bold mb-3">Field Tested</h4>
                            <p className="text-sm text-muted">Our algorithms aren't theoretical. They are forged in active print shops and garment units handling millions of pieces.</p>
                        </div>
                        <div className="p-6 bg-bg/50 rounded border border-white/5 hover:border-gold1/30 transition-colors">
                            <h4 className="text-gold1 font-bold mb-3">Unified Ecosystem</h4>
                            <p className="text-sm text-muted">Stop juggling 10 different apps. Smart Save, TechPacks, and ERP talk to each other to create a single source of truth.</p>
                        </div>
                        <div className="p-6 bg-bg/50 rounded border border-white/5 hover:border-gold1/30 transition-colors">
                            <h4 className="text-gold1 font-bold mb-3">Luxury Standard</h4>
                            <p className="text-sm text-muted">We believe software should be as refined as the garments you produce. No clutter, just power.</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
