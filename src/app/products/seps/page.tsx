import { ProductPageLayout } from "@/components/ProductPageLayout";

export default function SepsPage() {
    return (
        <ProductPageLayout
            title="Mithronix Seps"
            desc="The gold standard in color separation. Achieve photorealistic prints on dark garments without the complexity of manual channel splitting."
            features={[
                "Advanced Simulated Process Separation",
                "Intelligent Spot Color Extraction",
                "Custom Halftone & Angle Control",
                "Automated Underbase Generation",
                "Highlight White Optimization",
                "Seamless Photoshop Plugin Integration"
            ]}
            workflow={[
                { title: "Import", desc: "Load your high-resolution raster artwork into the Seps engine." },
                { title: "Separate", desc: "Choose your target ink set and let the AI-assisted engine split the colors." },
                { title: "Print", desc: "Output film positives directly or send to detailed proofing for approval." }
            ]}
            bestFor={["Screen Printers", "Prepress Departments", "Merch Companies"]}
        >
            <div className="bg-panel2 border border-gold1/20 rounded-lg p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Fair Usage Policy: Pay-per-Color Credits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-muted leading-relaxed mb-4">
                            Mithronix Seps uses a flexible credit system. You are charged based on the <strong>maximum number of colors</strong> exported for a specific project.
                        </p>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-2">
                                <span className="text-gold1">✓</span> Charged only on final export.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-gold1">✓</span> Reducing colors later does NOT use credits.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-gold1">✓</span> Increasing colors only charges the difference.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-bg border border-white/5 rounded p-6">
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Example Scenario</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted">First Export (6 Colors)</span>
                                <span className="text-white font-mono">6 Credits Used</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted">Revision (Reduced to 4)</span>
                                <span className="text-green-400 font-mono">0 Credits Used</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted">Final (Increased to 8)</span>
                                <span className="text-gold1 font-mono">+2 Credits Used</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-muted/50 mt-6 italic">
                    Terms: Credits are consumed based on the maximum number of colors exported per project. Reducing colors does not result in a refund of credits.
                </p>
            </div>
        </ProductPageLayout>
    );
}
