import { SectionTitle } from "@/components/SectionTitle";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionTitle>Privacy Policy</SectionTitle>
                <div className="prose prose-invert prose-gold max-w-none text-muted">
                    <p>Last Updated: December 2025</p>
                    <h3>1. Information We Collect</h3>
                    <p>We collect information you provide directly to us when using our services, including account details and usage data.</p>
                    <h3>2. How We Use Information</h3>
                    <p>We use your information to operate, maintain, and improve our products, and to communicate with you.</p>
                    <h3>3. Data Security</h3>
                    <p>We implement industry-standard security measures to protect your data.</p>
                    {/* ... more content */}
                </div>
            </div>
        </main>
    );
}
