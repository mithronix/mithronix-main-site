import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Layers, Monitor, FileJson, Factory } from "lucide-react";

export default function PortfolioPage() {
    const portfolioSections = [
        {
            title: "Smart Save Workflow",
            items: [
                { title: "Billing Dashboard UX", category: "UI/UX", desc: "Seamless invoice tracking interface." },
                { title: "One-Click Macro Panel", category: "Automation", desc: "CorelDRAW integration sidebar." },
                { title: "Client Proof Generator", category: "Output", desc: "Automated JPEG approval sheets." },
            ]
        },
        {
            title: "Seps Engine",
            items: [
                { title: "Simulated Process Detail", category: "Print", desc: "6-color separation visualization." },
                { title: "Channel Split View", category: "Analysis", desc: "Individual plate inspection logic." },
                { title: "Halftone Angle Matrix", category: "Technical", desc: "Moiré-free angle calculation." },
                { title: "Vector Recovery", category: "AI", desc: "Raster to Vector conversion engine." },
            ]
        },
        {
            title: "TechPack & ERP",
            items: [
                { title: "Spec Sheet Template", category: "Documentation", desc: "Standardized construction sheets." },
                { title: "Inventory Heatmap", category: "Analytics", desc: "Visual stock density reporting." },
                { title: "Production Timeline", category: "Management", desc: "Gantt chart view for factory floor." },
            ]
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="A showcase of our premium design philosophy and technical capability.">
                    Visual Portfolio
                </SectionTitle>

                <div className="space-y-24">
                    {portfolioSections.map((section, sIdx) => (
                        <div key={sIdx}>
                            <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-gold1 pl-4">{section.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, i) => (
                                    <PortfolioItem key={i} title={item.title} category={item.category} desc={item.desc} idx={i + sIdx} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function PortfolioItem({ title, category, desc, idx }: { title: string, category: string, desc: string, idx: number }) {
    // Generate deterministic but varied gradients based on index
    const gradients = [
        "from-gold3/20 to-panel2",
        "from-panel2 to-gold3/10",
        "from-bg to-gold2/10",
        "from-gold1/10 to-bg"
    ];
    const gradient = gradients[idx % gradients.length];

    return (
        <Card className="group p-0 flex flex-col overflow-hidden h-full hover:border-gold1/40 transition-colors">
            <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${gradient}`}>
                {/* Decorative UI elements */}
                <div className="absolute inset-4 border border-white/5 rounded bg-bg/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-gold3/20 flex items-center justify-center text-gold1/50 group-hover:text-gold1 transition-colors">
                        {idx % 3 === 0 ? <Monitor /> : idx % 3 === 1 ? <Layers /> : <FileJson />}
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <Badge>{category}</Badge>
                </div>
            </div>
            <div className="p-6 bg-panel flex-grow flex flex-col">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold1 transition-colors">{title}</h4>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
        </Card>
    )
}
