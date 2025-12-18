'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { GoldButton } from '@/components/GoldButton'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text px-6 text-center">
            <h2 className="text-4xl font-bold text-danger mb-4">Something went wrong!</h2>
            <p className="text-muted mb-8">We encountered an unexpected error.</p>
            <GoldButton
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </GoldButton>
        </div>
    )
}
