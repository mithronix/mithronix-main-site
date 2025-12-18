import { SectionTitle } from "@/components/SectionTitle";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionTitle>Terms of Service</SectionTitle>
                <div className="prose prose-invert prose-gold max-w-none text-muted">
                    <p>Last Updated: December 2025</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing Mithronix services, you agree to be bound by these terms.</p>
                    <h3>2. Usage License</h3>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Mithronix's website for personal, non-commercial transitory viewing only.</p>
                    <p className="mt-4 text-gold1 border-l-2 border-gold1 pl-4">
                        <strong>Smart Save Suite License:</strong> The Smart Save Suite is licensed as a unified system including CorelDRAW, Photoshop, and Billing modules. These individual tools are not sold or licensed separately.
                    </p>
                    <h3>3. Disclaimer</h3>
                    <p>The materials on Mithronix's website are provided on an 'as is' basis.</p>
                    {/* ... more content */}
                </div>
            </div>
        </main>
    );
}
