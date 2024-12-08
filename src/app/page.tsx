"use client";

import { NameFormLayout } from "./layouts/NameFormLayout/NameFormLayout";

export default function Home() {
	return (
		<body>
			<nav style={{ height: "40px", width: "100%" }}></nav>
			<main>
				<NameFormLayout />
			</main>
			<footer></footer>
		</body>
	);
}
