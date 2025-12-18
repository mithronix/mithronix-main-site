import Link from "next/link";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import { Monitor, Layers, FileJson, Factory, ArrowRight } from "lucide-react";

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="Browse our specialized modules for every stage of production.">
                    Product Ecosystem
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProductBlock
                        title="Mithronix Smart Save Suite"
                        desc="The complete suite including CorelDRAW automation, Photoshop integration, and Billing Dashboard for total workflow control."
                        icon={Monitor}
                        href="/products/smart-save"
                        features={["CorelDRAW Macro", "Photoshop Plugin", "Billing Dashboard"]}
                    />
                    <ProductBlock
                        title="Mithronix Seps Engine"
                        desc="Advanced color separation engine that rivals high-end standalone software. Perfect for screen printers."
                        icon={Layers}
                        href="/products/seps"
                        features={["Simulated Process", "Spot Color", "Halftone Control"]}
                    />
                    <ProductBlock
                        title="TechPack Builder"
                        desc="Drag-and-drop tech pack creation. Generate professional PDFs for factories in under 5 minutes."
                        icon={FileJson}
                        href="/products/techpack"
                        features={["PDF Export", "Size Charts", "Material Library"]}
                    />
                    <ProductBlock
                        title="Garment ERP"
                        desc="Complete factory management solution. inventory, production tracking, payroll, and invoicing."
                        icon={Factory}
                        href="/products/erp"
                        features={["Inventory", "Production Tracking", "HR & Payroll"]}
                    />
                </div>
            </div>
        </main>
    );
}

function ProductBlock({ title, desc, icon: Icon, href, features }: { title: string, desc: string, icon: React.ElementType, href: string, features: string[] }) {
    return (
        <Card className="flex flex-col md:flex-row gap-8 p-8 items-center md:items-start group">
            <div className="w-24 h-24 rounded-full bg-gold3/10 flex items-center justify-center flex-shrink-0 border border-gold2/20 group-hover:bg-gold2/20 transition-colors">
                <Icon className="w-10 h-10 text-gold1" />
            </div>
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold1 transition-colors">{title}</h3>
                <p className="text-muted mb-6 leading-relaxed">{desc}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                    {features.map(f => (
                        <span key={f} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400 font-mono">{f}</span>
                    ))}
                </div>

                <Link href={href}>
                    <GoldButton className="w-full md:w-auto">Learn More</GoldButton>
                </Link>
            </div>
        </Card>
    )
}
