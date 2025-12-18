"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import { Card } from "@/components/Card";
import { Toast } from "@/components/Toast";
import { Mail, MessageCircle } from "lucide-react";

interface ContactMessage {
    name: string;
    email: string;
    company: string;
    product: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactMessage>({
        name: "",
        email: "",
        company: "",
        product: "Smart Save",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [toastMessage, setToastMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setToastMessage("Message sent successfully. We'll be in touch!");
                setFormData({ ...formData, message: "", name: "", email: "", company: "" });
            } else {
                throw new Error(data.error || "Failed to send");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setToastMessage("Failed to send. Please email us directly: mithronix.ai@gmail.com");
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="Start your journey with Mithronix.">Get in Touch</SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm text-muted mb-2">Full Name <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-gold2 focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Email Address <span className="text-danger">*</span></label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-gold2 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Company / Studio</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-gold2 focus:outline-none transition-colors"
                                    placeholder="Creative Studio Inc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Interested Product</label>
                                <select
                                    value={formData.product}
                                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-gold2 focus:outline-none transition-colors"
                                >
                                    <option>Smart Save</option>
                                    <option>Mithronix Seps</option>
                                    <option>TechPack Builder</option>
                                    <option>Garment ERP</option>
                                    <option>Other / General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Message <span className="text-danger">*</span></label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-gold2 focus:outline-none transition-colors"
                                    placeholder="Tell us about your needs..."
                                />
                            </div>
                            <GoldButton type="submit" className="w-full" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </GoldButton>
                        </form>
                    </Card>

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div className="bg-panel2 border border-gold3/20 rounded-lg p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Options</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gold3/10 rounded-full text-gold1">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Email Us</h4>
                                        <p className="text-muted text-sm mt-1">mithronix.ai@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gold3/10 rounded-full text-gold1">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">WhatsApp / Phone</h4>
                                        <p className="text-muted text-sm mt-1">+91 7358838198</p>
                                        <p className="text-xs text-gray-500 mt-1">Available Mon-Fri, 9am - 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gold3/20 to-panel rounded-lg p-8 border border-gold2/20">
                            <h3 className="text-xl font-bold text-white mb-4">Enterprise Inquiries?</h3>
                            <p className="text-muted text-sm mb-6 leading-relaxed">
                                For large-scale factory deployments or custom API integrations, please contact our enterprise solutions team directly.
                            </p>
                            <p className="text-gold1 font-bold">mithronix.ai@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <Toast
                message={toastMessage}
                type={status === "error" ? "error" : "success"}
                isVisible={status === "success" || status === "error"}
                onClose={() => setStatus("idle")}
            />
        </main>
    );
}
