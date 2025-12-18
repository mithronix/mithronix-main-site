import Link from "next/link";
import { GoldButton } from "@/components/GoldButton";
import { OutlineGoldButton } from "@/components/OutlineGoldButton";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { Badge } from "@/components/Badge";
import { CheckCircle, Zap, Shield, Globe, Monitor, Layers, FileJson, Factory, Star, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold3/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-center lg:text-left">
                        <Badge>Version 2.0 Now Available</Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold1 via-white to-gold2">
                                Luxury-Grade Tools
                            </span>
                            <br />
                            <span className="text-white text-3xl md:text-5xl font-light">
                                for Screen Printing & Design Automation
                            </span>
                        </h1>
                        <p className="text-muted text-lg md:text-xl mt-6 max-w-2xl mx-auto lg:mx-0 font-light border-l-2 border-gold3/30 pl-6">
                            Speed + Consistency + Professional Workflows.
                            The ultimate suite for modern garment production.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <Link href="/products">
                                <GoldButton className="w-full sm:w-auto">Explore Products</GoldButton>
                            </Link>
                            <Link href="/contact">
                                <OutlineGoldButton className="w-full sm:w-auto">Request Demo</OutlineGoldButton>
                            </Link>
                        </div>
                    </div>

                    {/* Right Preview Panel */}
                    <div className="relative mt-10 lg:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold2 to-gold1 opacity-20 blur-2xl transform rotate-6 rounded-lg" />
                        <div className="bg-panel border border-gold2/30 rounded-lg p-2 shadow-2xl relative transform transition-transform hover:scale-[1.01] duration-500">
                            <div className="bg-bg rounded border border-white/5 p-4 h-[400px] flex flex-col justify-center items-center overflow-hidden relative">
                                {/* Abstract UI representation */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-panel2 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-danger/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-gold2/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-ok/50"></div>
                                </div>
                                <div className="w-full max-w-md space-y-4 pt-8">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-32 bg-panel2 border border-white/5 rounded animate-pulse"></div>
                                        <div className="w-2/3 space-y-3">
                                            <div className="h-4 bg-gold3/20 rounded w-3/4"></div>
                                            <div className="h-4 bg-white/5 rounded w-1/2"></div>
                                            <div className="h-20 bg-panel2 rounded border border-white/5 mt-4"></div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gradient-to-r from-gold3 to-gold1 rounded w-full mt-8 opacity-50"></div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-10 bg-panel2 border border-gold2/20 rounded"></div>
                                        <div className="h-10 bg-panel2 border border-gold2/20 rounded"></div>
                                        <div className="h-10 bg-gold2/20 border border-gold2/50 rounded flex items-center justify-center text-gold1 text-xs uppercase font-bold">Process</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST BAR */}
            <section className="border-y border-white/5 bg-panel/30 backdrop-blur-sm py-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <TrustItem text="22+ Years Industry Experience" />
                        <TrustItem text="Production-Ready Outputs" />
                        <TrustItem text="Automation First" />
                        <TrustItem text="Global Quality Standard" />
                    </div>
                </div>
            </section>

            {/* 3. PRODUCTS GRID */}
            <section className="py-24 px-6 relative">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold3/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="container mx-auto">
                    <SectionTitle subtitle="Our module ecosystem designed for total control.">
                        The Mithronix Suite
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductCard
                            title="Smart Save Suite"
                            icon={Monitor}
                            desc="Automated CorelDRAW saving, proofing, and file management bundled with billing."
                            href="/products/smart-save"
                        />
                        <ProductCard
                            title="Seps Engine"
                            icon={Layers}
                            desc="Professional color separation workflow for screen printing."
                            href="/products/seps"
                        />
                        <ProductCard
                            title="TechPack Builder"
                            icon={FileJson}
                            desc="Create industry-standard tech packs in minutes."
                            href="/products/techpack"
                        />
                        <ProductCard
                            title="Garment ERP"
                            icon={Factory}
                            desc="End-to-end management for garment manufacturing."
                            href="/products/erp"
                        />
                    </div>
                </div>
            </section>

            {/* 4. FEATURE HIGHLIGHTS */}
            <section className="py-24 bg-panel2/30 px-6">
                <div className="container mx-auto space-y-24">
                    <FeatureRow
                        title="Automation at Core"
                        desc="Eliminate repetitive tasks. Our tools handle the heavy lifting of file saving, color separation, and data entry, letting you focus on creativity."
                        icon={Zap}
                        reverse={false}
                    />
                    <FeatureRow
                        title="Precision Engineering"
                        desc="Every pixel matters. Mithronix tools are calibrated for exact output requirements, ensuring your separations and tech packs are production-ready instantly."
                        icon={CheckCircle}
                        reverse={true}
                    />
                    <FeatureRow
                        title="Speed of Light"
                        desc="Convert days of work into minutes. From bulk processing designs to generating complex ERP reports, experience unprecedented velocity."
                        icon={ArrowRight} // Using simpler icon for speed equivalent if customized not available
                        reverse={false}
                    />
                </div>
            </section>

            {/* 5. TESTIMONIALS */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <SectionTitle subtitle="Early workflow impressions from design and production professionals.">
                        Industry Feedback
                    </SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Mithronix completely transformed our prepress workflow. Smart Save alone saves us 20 hours a week."
                            author="Alex R."
                            role="Studio Manager"
                        />
                        <TestimonialCard
                            quote="The separation quality from Mithronix Seps is unmatched. It rivals high-end standalone software."
                            author="Sarah K."
                            role="Screen Printer"
                        />
                        <TestimonialCard
                            quote="Finally, an ERP that actually understands the garment business. Inventory tracking is flawless."
                            author="Mike T."
                            role="Production Head"
                        />
                    </div>
                </div>
                <div className="container mx-auto mt-12 text-center">
                    <p className="text-xs text-muted/50 italic">
                        Testimonials reflect individual workflow experiences. Names and roles are anonymized for privacy.
                    </p>
                </div>
            </section>

            {/* 6. CTA BANNER */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="bg-gradient-to-br from-gold3 to-panel border border-gold2/30 rounded-lg p-12 text-center relative overflow-hidden">
                        {/* Noise Texture via CSS */}
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Start your Mithronix workflow today
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Join the elite group of designers and manufacturers optimizing their production.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/contact">
                                    <button className="bg-white text-gold3 font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors uppercase tracking-wide">
                                        Contact Us
                                    </button>
                                </Link>
                                <Link href="/pricing">
                                    <button className="border border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors uppercase tracking-wide">
                                        View Pricing
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Helpers

function TrustItem({ text }: { text: string }) {
    return (
        <div className="flex flex-col items-center gap-2 p-4">
            <Shield className="w-6 h-6 text-gold1" />
            <span className="text-sm uppercase tracking-wider text-muted font-medium">{text}</span>
        </div>
    )
}

function ProductCard({ title, desc, icon: Icon, href }: { title: string, desc: string, icon: React.ElementType, href: string }) {
    return (
        <Link href={href} className="block h-full">
            <Card className="h-full flex flex-col items-center text-center p-8 hover:bg-white/5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold2/20 to-gold3/10 flex items-center justify-center mb-6 border border-gold2/20">
                    <Icon className="w-8 h-8 text-gold1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
                <span className="text-gold2 text-xs uppercase font-bold tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                </span>
            </Card>
        </Link>
    )
}

function FeatureRow({ title, desc, icon: Icon, reverse }: { title: string, desc: string, icon: React.ElementType, reverse: boolean }) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
                <div className="w-full aspect-video bg-panel rounded-lg border border-gold3/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold3/10 to-transparent"></div>
                    {/* Decorative UI elements for placeholder */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-bg/50 border border-white/5 rounded flex flex-col p-4">
                        <div className="h-4 bg-white/10 rounded w-1/3 mb-4"></div>
                        <div className="space-y-2">
                            <div className="h-2 bg-white/5 rounded w-full"></div>
                            <div className="h-2 bg-white/5 rounded w-5/6"></div>
                            <div className="h-2 bg-white/5 rounded w-full"></div>
                        </div>
                        <div className="mt-auto self-end">
                            <div className="h-8 w-24 bg-gold1/20 rounded border border-gold1/30"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 text-center md:text-left">
                <div className="inline-block p-3 rounded bg-gold3/10 text-gold1 mb-4">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                <p className="text-muted text-lg leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
    return (
        <Card className="text-left">
            <div className="flex gap-1 text-gold2 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-lg text-white mb-6 italic font-light">"{quote}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gold3/30"></div>
                <div>
                    <h5 className="font-bold text-white text-sm">{author}</h5>
                    <span className="text-xs text-muted uppercase tracking-wider">{role}</span>
                </div>
            </div>
        </Card>
    )
}
