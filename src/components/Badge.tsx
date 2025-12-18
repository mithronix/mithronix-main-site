export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gold1 bg-gold3/10 border border-gold3/30 rounded-full tracking-wider uppercase shadow-[0_0_10px_rgba(214,168,79,0.1)]">
            {children}
        </span>
    );
}
