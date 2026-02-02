// app/character/[id]/not-found.tsx

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container mx-auto px-4 py-16">
            <article className="text-center grid gap-5">
                <h1 className="text-4xl font-bold mb-2 font-josefin">Not Found</h1>
                <p className="text-2xl">This character could not be found</p>
                <Link href="/"> ⬅ Back to Characters</Link>
            </article>
        </main>
    );
}