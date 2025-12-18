"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { GoldButton } from "@/components/GoldButton";
import { OutlineGoldButton } from "@/components/OutlineGoldButton";
import { Card } from "@/components/Card";
import { Check, Monitor, Layers, FileJson, Factory } from "lucide-react";
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
                priceMonthly: "39",
                priceAnnual: "29",
                features: ["CorelDRAW + Photoshop", "5 GB Storage", "Email Support", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "99",
                priceAnnual: "79",
                features: ["Advanced Automation", "50 GB Storage", "Priority Support", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "249",
                priceAnnual: "199",
                features: ["Unlimited Storage", "Dedicated Manager", "API Access", "10 Users"]
            }
        ]
    },
    'seps': {
        title: "Seps Engine",
        icon: Layers,
        tiers: [
            {
                name: "Starter",
                priceMonthly: "49",
                priceAnnual: "39",
                features: ["Spot Color Separation", "Basic Halftones", "SVG Export", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "89",
                priceAnnual: "69",
                features: ["Simulated Process", "Advanced Blending", "High-Res Output", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "189",
                priceAnnual: "149",
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
                priceMonthly: "25",
                priceAnnual: "19",
                features: ["5 Active Tech Packs", "Standard PDF Export", "Basic Asset Library", "1 User"]
            },
            {
                name: "Pro",
                priceMonthly: "49",
                priceAnnual: "39",
                features: ["Unlimited Tech Packs", "Manufacturer Portal", "Costing Tools", "3 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "119",
                priceAnnual: "89",
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
                priceMonthly: "79",
                priceAnnual: "59",
                features: ["Inventory Management", "Order Tracking", "Basic Invoicing", "2 Users"]
            },
            {
                name: "Pro",
                priceMonthly: "149",
                priceAnnual: "119",
                features: ["Production Scheduling", "Payroll & HR", "Vendor Portal", "5 Users"]
            },
            {
                name: "Studio",
                priceMonthly: "299",
                priceAnnual: "249",
                features: ["Multi-Factory Support", "Business Intelligence", "Custom Reports", "15 Users"]
            }
        ]
    }
};

export default function PricingPage() {
    const [annual, setAnnual] = useState(true);
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
                    <div className="bg-panel p-1 rounded-full border border-gold3/20 flex relative">
                        <button
                            onClick={() => setAnnual(false)}
                            className={clsx(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
                                !annual ? "text-black" : "text-muted hover:text-white"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={clsx(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
                                annual ? "text-black" : "text-muted hover:text-white"
                            )}
                        >
                            Yearly <span className="text-[10px] ml-1 opacity-70">(Save ~20%)</span>
                        </button>

                        <div
                            className={clsx(
                                "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gold2 rounded-full transition-all duration-300",
                                annual ? "left-[calc(50%)]" : "left-1"
                            )}
                        />
                    </div>
                </div>

                {/* Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 animate-fade-in-up key={activeTab}">
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
