"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import { OutlineGoldButton } from "@/components/OutlineGoldButton";
import { Card } from "@/components/Card";
import { Check, Monitor, Layers, FileJson, Factory, CreditCard } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

type ProductKey = 'smart-save' | 'seps' | 'techpack' | 'erp';

const PRICING_DATA = {
    'smart-save': {
        title: "Smart Save Suite",
        icon: Monitor,
        tiers: [
            {
                name: "Starter",
                priceMonthly: "29",
                priceAnnual: "23",
                features: ["Local Smart Save System", "CorelDRAW + Photoshop Auto", "Google Drive / OneDrive Compat.", "Works Fully Offline", "Email Support", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "79",
                priceAnnual: "63",
                features: ["Advanced Automation Workflows", "User's Cloud Sync Compatible", "Drive/OneDrive Version History", "Priority Support", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "199",
                priceAnnual: "159",
                features: ["Team-Ready Workflow System", "External Cloud Sync Support", "Multi-Designer Environment", "API Access", "Dedicated Manager", "10 Users"]
            }
        ]
    },
    'seps': {
        title: "Seps Engine",
        icon: Layers,
        tiers: [
            {
                name: "Starter",
                priceMonthly: "39",
                priceAnnual: "31",
                features: ["Spot Color Separation", "Basic Halftones", "SVG Export", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "69",
                priceAnnual: "55",
                features: ["Simulated Process", "Advanced Blending", "High-Res Output", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "149",
                priceAnnual: "119",
                features: ["AI Hybrid Mode", "Bulk Processing", "API Integration", "Unlimited Users"]
            }
        ]
    },
    'techpack': {
        title: "TechPack Builder",
        icon: FileJson,
        tiers: [
            {
                name: "Starter",
                priceMonthly: "19",
                priceAnnual: "15",
                features: ["5 Active Tech Packs", "Standard PDF Export", "Basic Asset Library", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "39",
                priceAnnual: "31",
                features: ["Unlimited Tech Packs", "Manufacturer Portal", "Costing Tools", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "89",
                priceAnnual: "71",
                features: ["Custom Branding", "ERP Sync", "Version History", "10 Users"]
            }
        ]
    },
    'erp': {
        title: "Garment ERP",
        icon: Factory,
        tiers: [
            {
                name: "Starter",
                priceMonthly: "59",
                priceAnnual: "47",
                features: ["Inventory Management", "Order Tracking", "Basic Invoicing", "2 Users"]
            },
            {
                name: "Pro",
                priceMonthly: "119",
                priceAnnual: "95",
                features: ["Production Scheduling", "Payroll & HR", "Vendor Portal", "5 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "249",
                priceAnnual: "199",
                features: ["Multi-Factory Support", "Business Intelligence", "Custom Reports", "15 Users"]
            }
        ]
    }
};

export default function PricingPage() {
    const [annual, setAnnual] = useState(false); // Default to Monthly
    const [activeTab, setActiveTab] = useState<ProductKey>('smart-save');

    const activeProduct = PRICING_DATA[activeTab];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionTitle subtitle="Transparent investment for professional results. Select a module below.">
                    Product Pricing
                </SectionTitle>

                {/* Product Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(Object.keys(PRICING_DATA) as ProductKey[]).map((key) => {
                        const product = PRICING_DATA[key];
                        const isActive = activeTab === key;
                        const Icon = product.icon;

                        return (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={clsx(
                                    "flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300",
                                    isActive
                                        ? "bg-gold3/20 border-gold1 text-white shadow-[0_0_20px_rgba(214,168,79,0.2)]"
                                        : "bg-panel border-white/5 text-muted hover:border-gold3/30 hover:text-gold1"
                                )}
                            >
                                <Icon className={clsx("w-4 h-4", isActive ? "text-gold1" : "text-current")} />
                                <span className="font-medium">{product.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-panel p-1 rounded-full border border-gold3/20 flex relative w-full max-w-[320px]">
                        <button
                            onClick={() => setAnnual(false)}
                            className={clsx(
                                "flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 text-center",
                                !annual ? "text-black" : "text-muted hover:text-white"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={clsx(
                                "flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 text-center",
                                annual ? "text-black" : "text-muted hover:text-white"
                            )}
                        >
                            Yearly <span className="text-[10px] ml-1 opacity-70">(Save ~20%)</span>
                        </button>

                        <div
                            className={clsx(
                                "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gold2 rounded-full transition-all duration-300 shadow-md",
                                annual ? "left-[calc(50%)]" : "left-1"
                            )}
                        />
                    </div>
                </div>

                {/* Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 animate-fade-in-up key={activeTab}">
                    {activeProduct.tiers.map((tier, index) => (
                        <PricingCard
                            key={tier.name}
                            name={tier.name}
                            price={annual ? tier.priceAnnual : tier.priceMonthly}
                            features={tier.features}
                            highlighted={index === 1} // Highlight Pro tier
                        />
                    ))}
                </div>

                {/* Cloud Storage Disclaimer */}
                <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up delay-100">
                    <p className="text-sm font-medium text-gold1 mb-2">LOCAL-FIRST  •  CLOUD-COMPATIBLE  •  SECURE</p>
                    <p className="text-muted leading-relaxed px-6">
                        “Mithronix does not store or host your files.
                        All designs remain on your computer or your own cloud storage.
                        This ensures full data ownership, privacy, and offline reliability.”
                    </p>
                </div>

                {/* Module Pricing Summary Table */}
                <div className="max-w-4xl mx-auto mb-24 overflow-x-auto">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Module Pricing Summary</h3>
                    <table className="w-full text-left text-sm text-muted">
                        <thead className="bg-panel border-b border-white/10 text-white uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 rounded-tl-lg">Module</th>
                                <th className="px-6 py-4">Starter <span className="text-[10px] opacity-60 normal-case">(Monthly)</span></th>
                                <th className="px-6 py-4">Pro <span className="text-[10px] opacity-60 normal-case">(Monthly)</span></th>
                                <th className="px-6 py-4 rounded-tr-lg">Studio <span className="text-[10px] opacity-60 normal-case">(Monthly)</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-panel2/50 divide-y divide-white/5 border border-white/5 border-t-0 rounded-b-lg">
                            {(Object.keys(PRICING_DATA) as ProductKey[]).map((key) => {
                                const p = PRICING_DATA[key];
                                return (
                                    <tr key={key} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                                            <p.icon className="w-4 h-4 text-gold1" /> {p.title}
                                        </td>
                                        <td className="px-6 py-4">${p.tiers[0].priceMonthly}</td>
                                        <td className="px-6 py-4">${p.tiers[1].priceMonthly}</td>
                                        <td className="px-6 py-4">${p.tiers[2].priceMonthly}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <p className="text-center text-xs text-muted/60 mt-4 italic">
                        Note: Yearly plans will offer ~20% discount on these rates.
                    </p>
                </div>

                {/* Payment Options */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-lg font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block px-12">Payment Options</h3>
                    <div className="flex flex-wrap justify-center gap-8 mb-6">
                        <PaymentMethod name="Card / UPI" />
                        <PaymentMethod name="Stripe" />
                        <PaymentMethod name="PayPal" />
                    </div>
                    <p className="text-sm text-muted bg-panel border border-gold3/20 inline-block px-6 py-3 rounded">
                        Payment links will be provided after demo confirmation.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-sm text-muted opacity-80">
                        Need a custom enterprise solution? <Link href="/contact" className="text-gold1 underline">Contact Sales</Link>
                    </p>
                </div>

            </div>
        </main>
    );
}

function PricingCard({ name, price, features, highlighted }: { name: string, price: string, features: string[], highlighted: boolean }) {
    return (
        <Card className={clsx("flex flex-col p-8 transition-all duration-300", highlighted ? "border-gold1/50 bg-panel2/50 md:scale-105 shadow-2xl z-10" : "border-gold3/20 hover:border-gold3/40")}>
            {highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold2 text-black text-xs font-bold px-3 py-1 rounded-b">
                    MOST POPULAR
                </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-gold1">${price}</span>
                <span className="text-muted text-sm mb-1">/mo</span>
            </div>
            <div className="border-t border-white/10 my-6"></div>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-ok flex-shrink-0" /> <span className="text-left">{f}</span>
                    </li>
                ))}
            </ul>
            <Link href="/contact" className="mt-auto">
                {highlighted ? (
                    <GoldButton className="w-full">Get Started</GoldButton>
                ) : (
                    <OutlineGoldButton className="w-full">Get Started</OutlineGoldButton>
                )}
            </Link>
        </Card>
    )
}

function PaymentMethod({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 bg-panel border border-white/10 rounded text-muted hover:border-gold1/50 hover:text-white transition-all cursor-default">
            <CreditCard className="w-4 h-4" />
            <span className="font-medium text-sm">{name}</span>
        </div>
    )
}
