"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import { Card } from "@/components/Card";
import { Toast } from "@/components/Toast";
import { Upload, Calendar, Palette, Layers, Image as ImageIcon, FileArchive, CheckCircle2 } from "lucide-react";

export default function DesignPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        printType: "Screen Printing",
        colors: "",
        message: "",
        deadline: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [toastMessage, setToastMessage] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (file) {
            data.append("file", file);
        }

        try {
            const res = await fetch("/api/color-separation", {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Submission failed");

            setStatus("success");
            setToastMessage("Request sent successfully. Our team will contact you shortly.");
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                printType: "Screen Printing",
                colors: "",
                message: "",
                deadline: "",
            });
            setFile(null);
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setToastMessage(error.message || "Submission failed. Please email us directly at mithronix.ai@gmail.com");
        }
    };

    // Placeholder data for gallery
    const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        title: [
            "Screen Print Artwork",
            "Separation Preview",
            "Production Layout",
            "Vector Trace",
            "Halftone Simulation",
            "Color Separation"
        ][i % 6],
        type: ["Design", "Prepress", "Separation"][i % 3],
        color: ["bg-blue-500/20", "bg-purple-500/20", "bg-emerald-500/20", "bg-rose-500/20"][i % 4]
    }));

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="Selected design and prepress work crafted for professional production.">
                    Designing Work
                </SectionTitle>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-7xl mx-auto">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 hover:border-gold2/50 transition-all duration-500 bg-panel2">
                            {/* Premium Placeholder Content */}
                            <div className={`absolute inset-0 ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                            {/* Decorative Elements */}
                            <div className="absolute inset-4 border border-white/5 rounded-lg flex flex-col justify-between p-4">
                                <div className="flex justify-between items-start">
                                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                        <Layers className="w-4 h-4 text-white/50" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gold1 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                                        {item.type}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-1/2 bg-gradient-to-tr from-white/5 to-transparent rounded opacity-50" />
                                    <div className="w-2/3 h-2 bg-white/10 rounded" />
                                    <div className="w-1/2 h-2 bg-white/5 rounded" />
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Premium Quality Output
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Service Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gold1 to-white mb-4">
                            Color Separation Request
                        </h2>
                        <p className="text-muted text-lg">
                            Submit your artwork and requirements. Our team will review and respond.
                        </p>
                    </div>

                    <Card className="p-8 md:p-10 border-gold3/20 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Full Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Email Address <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Phone / WhatsApp <span className="text-danger">*</span></label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all"
                                        placeholder="+1 234 567 8900"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Print Type <span className="text-danger">*</span></label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all appearance-none"
                                            value={formData.printType}
                                            onChange={(e) => setFormData({ ...formData, printType: e.target.value })}
                                        >
                                            <option className="bg-black text-white">Screen Printing</option>
                                            <option className="bg-black text-white">DTF (Direct to Film)</option>
                                            <option className="bg-black text-white">DTG (Direct to Garment)</option>
                                            <option className="bg-black text-white">Sublimation</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                            <Layers className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Number of Colors <span className="text-danger">*</span></label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            min="1"
                                            max="20"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all"
                                            placeholder="e.g. 6"
                                            value={formData.colors}
                                            onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                            <Palette className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Deadline (Optional)</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all [color-scheme:dark]"
                                            value={formData.deadline}
                                            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                            {/* Date icon hidden by native picker, but good for spacing visual check if needed */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* File Upload */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Artwork File <span className="text-danger">*</span></label>
                                <div className={`border-2 border-dashed rounded-xl p-8 transition-colors ${file ? 'border-gold2/50 bg-gold2/5' : 'border-white/10 hover:border-gold2/30 hover:bg-white/5'}`}>
                                    <input
                                        type="file"
                                        id="artwork-upload"
                                        className="hidden"
                                        accept=".pdf,.ai,.psd,.cdr,.png,.zip"
                                        onChange={handleFileChange}
                                    // Required logic handled manually to show custom UI errors if needed, but adding 'required' to input for browser validation too if desired, though file inputs are tricky with styling.
                                    // We'll rely on our state check or browser validation if we can trigger it.
                                    />
                                    <label htmlFor="artwork-upload" className="flex flex-col items-center justify-center cursor-pointer">
                                        {file ? (
                                            <>
                                                <div className="w-12 h-12 rounded-full bg-gold2/20 flex items-center justify-center mb-3">
                                                    <CheckCircle2 className="w-6 h-6 text-gold2" />
                                                </div>
                                                <p className="text-white font-medium mb-1">{file.name}</p>
                                                <p className="text-xs text-muted">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                                                    <Upload className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                                                </div>
                                                <p className="text-white font-medium mb-1">Click to Upload Artwork</p>
                                                <p className="text-xs text-muted">PDF, AI, PSD, CDR, PNG, ZIP (Max 10MB)</p>
                                            </>
                                        )}
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Message / Notes</label>
                                <textarea
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-gold2 focus:outline-none focus:ring-1 focus:ring-gold2/50 transition-all"
                                    rows={4}
                                    placeholder="Tell us about specific requirements..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <GoldButton
                                type="submit"
                                className="w-full py-4 text-lg font-bold shadow-lg shadow-gold2/20"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Uploading & Sending..." : "Send Color Separation Request"}
                            </GoldButton>
                        </form>
                    </Card>
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
