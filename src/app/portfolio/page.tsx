import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

export default function PortfolioPage() {
    const items = [
        "Gold Leather Dashboard", "Smart Save Panel UI", "Channel Preview Layout", "TechPack PDF Sample",
        "ERP Analytics Preview", "Inventory Matrix", "Color Separation Detail", "Vector Artwork Optimization",
        "Client Proof Template", "Mobile App Interface", "Dark Mode Settings", "User Profile Widget"
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="A showcase of our premium design philosophy and technical capability.">
                    Visual Portfolio
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <PortfolioItem key={i} title={item} />
                    ))}
                </div>
            </div>
        </main>
    );
}

function PortfolioItem({ title }: { title: string }) {
    return (
        <Card className="group p-0 h-64 flex flex-col">
            <div className="flex-grow bg-black/20 relative overflow-hidden">
                {/* Abstract Art Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-panel2 to-bg group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full border border-gold1/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold3/20"></div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4">
                    <Badge>UI Design</Badge>
                </div>
            </div>
            <div className="p-4 border-t border-white/5 bg-panel">
                <h4 className="text-white font-medium group-hover:text-gold1 transition-colors">{title}</h4>
            </div>
        </Card>
    )
}
