import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mithronix Smart Save Suite | Complete Workflow Automation",
    description: "Unified suite including CorelDRAW Smart Save, Photoshop Plugin, and Billing Dashboard.",
};

export default function SmartSavePage() {
    return (
        <>
            <ProductPageLayout
                title="Mithronix Smart Save Suite"
                desc="The ultimate integrated workflow system. Includes CorelDRAW Smart Save Macro, Photoshop Smart Save Plugin, and the Mithronix Billing Dashboard in one unified package."
                features={[
                    "CorelDRAW Smart Save Automation",
                    "Photoshop Smart Save Integration",
                    "Integrated Billing & Invoice Dashboard",
                    "One-Click Proof Generation",
                    "Secure Cloud Sync & Versioning (via GDrive/OneDrive)",
                    "Smart Design Metadata System"
                ]}
                workflow={[
                    { title: "Design", desc: "Create in CorelDRAW or Photoshop. The Suite integrates natively into both." },
                    { title: "Smart Save", desc: "One click auto-detects dimensions, colors, and generates proofs for client approval." },
                    { title: "Manage", desc: "Data syncs to the Billing Dashboard for instant invoicing and production tracking." }
                ]}
                bestFor={["Graphic Designers", "Screen Print Shops", "Freelance Artists"]}
            />
            <div className="container mx-auto px-6 pb-12 text-center">
                <p className="text-sm text-muted bg-panel border border-gold3/20 inline-block px-6 py-3 rounded">
                    Note: Smart Save Suite is delivered as a single integrated package. Individual modules are not sold separately.
                </p>
            </div>
        </>
    );
}
