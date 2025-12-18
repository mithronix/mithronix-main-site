import { ProductPageLayout } from "@/components/ProductPageLayout";

export default function ErpPage() {
    return (
        <ProductPageLayout
            title="Garment ERP"
            desc="A unified operating system for your factory. From fabric roll tracking to final invoice, keep your entire production line connected."
            features={[
                "Raw Material & Fabric Inventory",
                "Real-time Production Stage Tracking",
                "Integrated HR & Payroll Processing",
                "Automated Invoicing & Billing",
                "Vendor & Supplier Management",
                "Live Analytics Dashboard"
            ]}
            workflow={[
                { title: "Order Entry", desc: "Input client orders and auto-calculate material requirements." },
                { title: "Production", desc: "Track the job through Cutting, Sewing, Printing, and Finishing floors." },
                { title: "Delivery", desc: "Generate packing lists, invoices, and shipping labels instantly." }
            ]}
            bestFor={["Garment Factories", "Textile Mills", "Large Scale Production"]}
        />
    );
}
