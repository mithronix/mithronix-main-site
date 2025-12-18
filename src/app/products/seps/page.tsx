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
        />
    );
}
