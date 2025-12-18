import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Shield, FileText } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-panel border-t border-gold3/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold1 via-white to-gold1">
                                Mithronix™
                            </span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed">
                            Global leader in screen printing automation and garment industry ERP solutions.
                            Efficiency meets luxury.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Linkedin} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link href="/" className="hover:text-gold1 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gold1 transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-gold1 transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-gold1 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Products</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link href="/products/smart-save" className="hover:text-gold1 transition-colors">Mithronix Smart Save Suite</Link></li>
                            <li><Link href="/products/seps" className="hover:text-gold1 transition-colors">Mithronix Seps Engine</Link></li>
                            <li><Link href="/products/techpack" className="hover:text-gold1 transition-colors">TechPack Builder</Link></li>
                            <li><Link href="/products/erp" className="hover:text-gold1 transition-colors">Garment ERP</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Start Building</h4>
                        <p className="text-sm text-muted mb-4">Ready to automate your workflow?</p>
                        <Link href="/contact" className="text-gold1 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 mb-6">
                            Get in Touch &rarr;
                        </Link>

                        <div className="space-y-2 mb-8">
                            <p className="text-xs text-muted">
                                <span className="block text-white mb-1 opacity-50 uppercase tracking-wider text-[10px]">Email Us</span>
                                mithronix.ai@gmail.com
                            </p>
                            <p className="text-xs text-muted">
                                <span className="block text-white mb-1 opacity-50 uppercase tracking-wider text-[10px]">WhatsApp / Phone</span>
                                +91 7358838198
                            </p>
                        </div>

                        <h4 className="text-white font-semibold mt-8 mb-4 uppercase text-xs tracking-wider opacity-70">Legal</h4>
                        <ul className="space-y-2 text-xs text-muted">
                            <li><Link href="/legal/privacy" className="hover:text-gold1 transition-colors flex items-center gap-2"><Shield className="w-3 h-3" /> Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-gold1 transition-colors flex items-center gap-2"><FileText className="w-3 h-3" /> Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 mt-8 max-w-[200px] leading-tight">
                            Smart Save Suite is licensed as a unified system. Individual tools are not sold separately.
                        </p>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted opacity-60">
                    <p>&copy; {new Date().getFullYear()} Mithronix. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
    return (
        <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gold1 hover:bg-gold1 hover:text-black transition-all duration-300">
            <Icon className="w-4 h-4" />
        </a>
    );
}
