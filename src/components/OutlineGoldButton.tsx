import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function OutlineGoldButton({ className, children, ...props }: Props) {
    return (
        <button
            className={clsx(
                "bg-transparent text-gold1 font-semibold",
                "px-6 py-3 rounded-sm border border-gold2",
                "hover:bg-gold2/10 hover:shadow-[0_0_15px_rgba(214,168,79,0.15)]",
                "transition-all duration-300 uppercase tracking-wider text-sm",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
