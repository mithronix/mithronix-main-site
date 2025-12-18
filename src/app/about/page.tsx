import { SectionTitle } from "@/components/SectionTitle";
import { Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 text-center">
            <SectionTitle subtitle="Building the future of garment production.">About Mithronix</SectionTitle>
            <div className="max-w-3xl mx-auto text-muted space-y-6 leading-relaxed text-lg">
                <p>
                    Founded on the principles of precision and efficiency, Mithronix has spent over two decades developing tools for the textile and printing industries.
                </p>
                <p>
                    Our mission is to democratize high-end manufacturing technology, providing studios and factories of all sizes with the automation tools previously reserved for global conglomerates.
                </p>
                <p>
                    From the pixel-perfect accuracy of our Color Separations to the robust data handling of our Garment ERP, every line of code we write is dedicated to making your workflow smoother, faster, and more profitable.
                </p>
            </div>
        </main>
    );
}
