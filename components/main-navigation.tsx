// components/main-navigation.tsx

import Link from "next/link";
import Image from "next/image";

const menu = [
	{ title: "About", href: "/about" },
	{ title: "Contact", href: "/contact" },
	{ title: "FAQ", href: "/faq" }
];

export default function MainNavigation() {
	return (
		<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur p-3">
			<div className="font-bold container mx-auto flex items-center justify-between">
				<Link href="/"><Image src="/star_wars.png" width={150} height={50} alt="star wars logo" /></Link>
				<ul className="flex gap-9 text-black">
					{
						menu.map((item, index) => <li key={index}><Link href={item.href} className="hover:underline underline-offset-4 transition-all">{item.title}</Link></li>)
					}
				</ul>
			</div>
		</nav>
	);
};

