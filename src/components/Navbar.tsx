"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Layers, FileJson, Factory } from "lucide-react";
import { GoldButton } from "./GoldButton";
import clsx from "clsx";

const products = [
    { name: "Mithronix Smart Save Suite", href: "/products/smart-save", icon: Monitor, desc: "CorelDRAW + Photoshop + Billing" },
    { name: "Mithronix Seps Engine", href: "/products/seps", icon: Layers, desc: "Color Separation Workflow" },
    { name: "Mithronix TechPack Builder", href: "/products/techpack", icon: FileJson, desc: "Builder for Designers" },
    { name: "Mithronix Garment ERP", href: "/products/erp", icon: Factory, desc: "Complete Factory Management" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-bg/95 backdrop-blur-md border-gold3/20 py-3 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold1 via-white to-gold1 pb-1">
                        Mithronix™
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm uppercase tracking-wide hover:text-gold1 transition-colors">
                        Home
                    </Link>

                    {/* Mega Menu Trigger */}
                    <div className="group relative">
                        <button className="text-sm uppercase tracking-wide hover:text-gold1 transition-colors flex items-center gap-1">
                            Products <ChevronDown className="w-4 h-4" />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[600px]">
                            <div className="bg-panel border border-gold3/30 p-6 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)] grid grid-cols-2 gap-4">

                                <div className="col-span-2 mb-2 pb-2 border-b border-white/5">
                                    <span className="text-xs text-muted uppercase tracking-widest">Our Suite</span>
                                </div>

                                {products.map((p) => (
                                    <Link
                                        key={p.name}
                                        href={p.href}
                                        className="flex items-start gap-4 p-3 rounded hover:bg-white/5 group/item transition-colors"
                                    >
                                        <div className="p-2 bg-gold3/10 rounded text-gold1 group-hover/item:text-gold2 group-hover/item:bg-gold3/20 transition-colors">
                                            <p.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover/item:text-gold1 transition-colors">{p.name}</h4>
                                            <p className="text-xs text-muted mt-1">{p.desc}</p>
                                        </div>
                                    </Link>
                                ))}

                                <div className="col-span-2 mt-2 pt-2 border-t border-white/5 flex justify-end">
                                    <Link href="/products" className="text-xs text-gold2 hover:text-white transition-colors">View All Products &rarr;</Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Link href="/pricing" className="text-sm uppercase tracking-wide hover:text-gold1 transition-colors">
                        Pricing
                    </Link>
                    <Link href="/portfolio" className="text-sm uppercase tracking-wide hover:text-gold1 transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/about" className="text-sm uppercase tracking-wide hover:text-gold1 transition-colors">
                        About
                    </Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <GoldButton className="!py-2 !px-5 !text-xs">Request Demo</GoldButton>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden fixed inset-0 bg-bg/98 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col pt-24 px-6 gap-6",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <Link href="/" className="text-xl font-medium text-white border-b border-white/10 pb-4">Home</Link>
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
                    <span className="text-gold1 text-sm uppercase tracking-widest">Products</span>
                    {products.map(p => (
                        <Link key={p.name} href={p.href} className="pl-4 text-muted hover:text-white transition-colors">
                            {p.name}
                        </Link>
                    ))}
                </div>
                <Link href="/pricing" className="text-xl font-medium text-white border-b border-white/10 pb-4">Pricing</Link>
                <Link href="/portfolio" className="text-xl font-medium text-white border-b border-white/10 pb-4">Portfolio</Link>
                <Link href="/about" className="text-xl font-medium text-white border-b border-white/10 pb-4">About</Link>
                <Link href="/contact" className="mt-4">
                    <GoldButton className="w-full justify-center">Contact Us</GoldButton>
                </Link>
            </div>
        </nav>
    );
}
