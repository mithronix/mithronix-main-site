import Link from 'next/link'
import { GoldButton } from '@/components/GoldButton'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text text-center px-6">
            <h2 className="text-4xl font-bold text-gold1 mb-4">Page Not Found</h2>
            <p className="text-muted mb-8 text-lg">Could not find requested resource</p>
            <Link href="/">
                <GoldButton>Return Home</GoldButton>
            </Link>
        </div>
    )
}
