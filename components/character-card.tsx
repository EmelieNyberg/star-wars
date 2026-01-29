// components/character-card.tsx
import { Character } from "@/types/star-wars";
import Image from "next/image";

export default function CharacterCard({ character }: { character: Character }) {
    return (

        <li className="py-4 text-black h-full overflow-hidden rounded-xl bg-white shadow
        transition
        hover:-translate-y-1 hover:shadow-lg
        focus-within:-translate-y-1 focus-within:shadow-lg">
            <h3 className="text-center font-bold uppercase tracking-wide">{character.name}</h3>

            <div className="relative mt-3 h-60 w-full">
                <Image
                    src={character.image}
                    alt={character.name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    fill
                    className="object-cover"
                // width={400}
                // height={400}
                />
            </div>
            <p className="px-4 pt-4 line-clamp-3 text-pretty">{character.description}</p>
        </li>

    );
};
