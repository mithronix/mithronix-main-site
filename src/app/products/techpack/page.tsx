import { ProductPageLayout } from "@/components/ProductPageLayout";

export default function TechPackPage() {
    return (
        <ProductPageLayout
            title="TechPack Builder"
            desc="Stop using spreadsheets. Create professional, clear, and accurate tech packs that factories understand, in a fraction of the time."
            features={[
                "Drag-and-Drop Component Library",
                "Integrated Material & Trim Database",
                "Intelligent Measurement Charts",
                "Auto-grading Logic for Sizes",
                "Visual Annotations & Callouts",
                "One-Click PDF Export"
            ]}
            workflow={[
                { title: "Select Template", desc: "Start from a garment type (T-Shirt, Hoodie, etc.) to preload standard points of measure." },
                { title: "Define Specs", desc: "Add your sketches, define BOM, and input grade rules visually." },
                { title: "Generate", desc: "Export a factory-ready PDF tech pack complete with all layout details." }
            ]}
            bestFor={["Fashion Designers", "Garment Manufacturers", "Technical Designers"]}
        />
    );
}
