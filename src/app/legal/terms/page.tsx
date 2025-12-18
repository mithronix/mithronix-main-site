import { SectionTitle } from "@/components/SectionTitle";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionTitle subtitle="Last Updated: December 2025">Terms of Service</SectionTitle>

                <div className="space-y-12 text-muted leading-relaxed">

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">1. Definitions</h3>
                        <p className="mb-4">
                            "Mithronix", "we", "us", or "our" refers to Mithronix AI solutions. "Service" refers to the Mithronix website, Smart Save Suite, Seps Engine, TechPack Builder, and ERP software appropriately licensed to you ("User").
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">2. Accounts & Access</h3>
                        <p className="mb-4">
                            To access certain features of the Service, you must register for an account. you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">3. License & Acceptable Use</h3>
                        <p className="mb-4">
                            Subject to your compliance with these Terms, Mithronix grants you a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes.
                        </p>
                        <p className="mb-4">
                            You agree not to:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Reverse engineer or attempt to extract the source code of the Service.</li>
                                <li>Use the Service for any illegal or unauthorized purpose.</li>
                                <li>Share your license key or account access with unauthorized third parties.</li>
                            </ul>
                        </p>
                        <p className="p-4 bg-panel2 border border-gold3/20 rounded text-sm text-gold1">
                            Smart Save Suite is licensed as a unified system. Individual tools are not sold separately.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">4. Subscription & Billing</h3>
                        <p className="mb-4">
                            Services are billed on a subscription basis (Monthly or Yearly). You agree to provide current, complete, and accurate billing information. Automatic renewals will occur unless cancelled at least 24 hours before the end of the current period.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">5. Credits Policy (Seps Engine)</h3>
                        <p className="mb-4">
                            The Seps Engine module operates on a hybrid subscription + credit model where applicable.
                        </p>
                        <div className="bg-panel2 p-6 rounded border border-white/5">
                            <h4 className="text-white font-bold mb-2 text-sm">Pay-per-Color Logic</h4>
                            <p className="mb-2 text-sm">
                                Credits are deducted based on the <strong>maximum number of colors exported</strong> for a specific project ID.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Reducing the color count after an export does not refund credits.</li>
                                <li>Increasing the color count only consumes credits for the additional colors (Difference).</li>
                                <li>Re-exporting the same number of colors does not consume additional credits.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">6. Refund Policy</h3>
                        <p className="mb-4">
                            We offer a 7-day money-back guarantee for first-time subscribers who are unsatisfied with the Service, provided no excessive usage (e.g., bulk exports) has occurred. Enterprise plans are non-refundable per the specific contract terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">7. Intellectual Property</h3>
                        <p className="mb-4">
                            The Service and its original content, features, and functionality are and will remain the exclusive property of Mithronix. The user retains all rights to the content (images, designs, data) they upload or process through the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h3>
                        <p className="mb-4">
                            In no event shall Mithronix be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4">9. Contact Us</h3>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="text-white font-bold">mithronix.ai@gmail.com</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
