"use client";

import { NameFormLayout } from "@/layouts/NameFormLayout/NameFormLayout";
import { NavbarLayout } from "@/layouts/NavbarLayout/NavbarLayout";

export default function Home() {
	return (
		<body>
			<NavbarLayout />
			<main>
				<NameFormLayout />
			</main>
			<footer></footer>
		</body>
	);
}
