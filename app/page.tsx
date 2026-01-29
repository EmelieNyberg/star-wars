// app/page.tsx

import characterData from "@/data/characters.json";
import CharacterCard from "@/components/character-card";
import HomepageHero from "@/components/homepage-hero";

export default function Home() {
  // const characters = characterData.data
  const { data: characters } = characterData;
  return (
    <main>
      <HomepageHero />

      <section className="mx-auto container py-7">
        <h2 className="text-center text-white text-3xl font-bold uppercase tracking-wide">All characters</h2>
        <ul className="mt-10 grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] auto-rows-fr">
          {characters.map((character) => (
            <CharacterCard key={character._id} character={character} />
          ))}
        </ul>
      </section>

      <h2>Home</h2>
    </main>
  );
};
