import clsx from 'clsx';

interface Props {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
}

export function SectionTitle({ children, subtitle, className }: Props) {
    return (
        <div className={clsx("mb-16 text-center", className)}>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold1 via-white to-gold2 inline-block pb-2">
                {children}
            </h2>
            {subtitle && (
                <p className="text-muted mt-4 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className="h-[1px] w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-gold2 to-transparent opacity-50" />
        </div>
    );
}
