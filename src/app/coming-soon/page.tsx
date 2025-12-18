import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import { GoldButton } from "@/components/GoldButton";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
            <SectionTitle subtitle="We are working hard to bring this module to life.">Coming Soon</SectionTitle>
            <p className="text-muted max-w-md mx-auto mb-10">
                This feature is currently in development. Subscribe to our newsletter to get notified when it launches.
            </p>
            <Link href="/">
                <GoldButton>Return Home</GoldButton>
            </Link>
        </main>
    );
}
