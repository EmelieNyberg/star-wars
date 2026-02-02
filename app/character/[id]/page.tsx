// app/character/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import data from "@/data/characters.json"
import { notFound } from "next/navigation";

export default async function CharacterPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const character = data.data.find((character) => character._id === id);

    if (!character) notFound();

    return (
        <main className="container mx-auto">
            <Link href="/" className="text-white font-bold">⬅ Back</Link>
            <article className="grid gap-10 md:grid-cols-2 md:items-center md:pt-10">
                <div className="relative h-[50vh] w-full md:order-2">
                    <Image
                        src={character.image}
                        alt={character.name}
                        className="object-cover border-10 border-white md:order-2"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <h1 className="text-4xl text-center font-bold md:order-1">{character.name}</h1>
                <p className="text-pretty md:col-span-2 md:order-3">{character.description}</p>
            </article>
        </main>
    );
};