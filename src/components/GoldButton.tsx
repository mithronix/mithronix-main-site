import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function GoldButton({ className, children, ...props }: Props) {
    return (
        <button
            className={clsx(
                "bg-gradient-to-r from-gold2 to-gold3 text-black font-semibold",
                "px-6 py-3 rounded-sm border border-gold1/50",
                "hover:brightness-110 hover:shadow-[0_0_20px_rgba(214,168,79,0.3)]",
                "transition-all duration-300 uppercase tracking-wider text-sm",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
