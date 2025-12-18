import clsx from 'clsx';

interface Props {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: Props) {
    return (
        <div
            className={clsx(
                "bg-panel border border-gold3/20 p-6 relative overflow-hidden",
                hoverEffect && "hover:border-gold2/50 hover:shadow-[0_0_30px_rgba(139,94,18,0.1)] transition-all duration-500 group",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </div>
    );
}
