// components/homepage-hero.tsx
import Image from "next/image";

export default function HomepageHero() {
	return (
		<section className="relative w-full h-[95vh] overflow-hidden">
			<Image src="https://images.unsplash.com/photo-1623476408624-721c9185d569?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D" sizes="100vw" alt="Hero" className="w-full object-cover object-top" fill />

			{/* Overlay text */}
			<div className="absolute inset-0 flex items-center">
				<div className="container mx-auto">
					<h2 className="font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl p-3">Welcome to this fanpage!</h2>
				</div>
			</div>
		</section>
	);
};
