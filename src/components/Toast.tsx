"use client";

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface Props {
    message: string;
    type?: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

export function Toast({ message, type = 'success', isVisible, onClose }: Props) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    const isError = type === 'error';

    return (
        <div
            className={clsx(
                "fixed bottom-8 right-8 z-50 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
        >
            <div className={clsx(
                "border text-white px-6 py-4 rounded shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center gap-4",
                isError ? "bg-red-950/90 border-red-500/50" : "bg-panel2 border-ok/50 shadow-[0_0_20px_rgba(45,227,125,0.2)]"
            )}>
                {isError ? <AlertCircle className="text-red-500 w-5 h-5" /> : <CheckCircle className="text-ok w-5 h-5" />}
                <div>
                    <h4 className={clsx("font-semibold text-sm uppercase tracking-wide", isError ? "text-red-500" : "text-ok")}>
                        {isError ? "Error" : "Success"}
                    </h4>
                    <p className="text-sm text-gray-300">{message}</p>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white ml-2">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
