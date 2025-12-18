"use client";

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CheckCircle, X } from 'lucide-react';

interface Props {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: Props) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div
            className={clsx(
                "fixed bottom-8 right-8 z-50 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-panel2 border border-ok/50 text-white px-6 py-4 rounded shadow-[0_0_20px_rgba(45,227,125,0.2)] flex items-center gap-4">
                <CheckCircle className="text-ok w-5 h-5" />
                <div>
                    <h4 className="font-semibold text-ok text-sm uppercase tracking-wide">Success</h4>
                    <p className="text-sm text-gray-300">{message}</p>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white ml-2">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
