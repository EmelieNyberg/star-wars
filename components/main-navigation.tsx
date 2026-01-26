// components/main-navigation.tsx
import Link from "next/link";
import Image from "next/image";

export default function MainNavigation() {
	return (
		<nav className="bg-white">
			<div className="font-bold container mx-auto flex items-center justify-between">
				<Link href="/"><Image src="/star_wars.png" width={150} height={50} alt="star wars logo" /></Link>
				<ul className="flex gap-9 text-black">
					<li><Link href="/about" className="hover:underline underline-offset-4 transition-all">About</Link></li>
					<li><Link href="/contact" className="hover:underline underline-offset-4 transition-all">Contact</Link></li>
					<li><Link href="/faq" className="hover:underline underline-offset-4 transition-all">FAQ</Link></li>
				</ul>
			</div>
		</nav>
	);
};

