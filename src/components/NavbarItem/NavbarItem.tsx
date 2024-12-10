"use client";

import Link from "next/link";
import styles from "./NavbarItem.module.scss";
import { usePathname } from "next/navigation";

const { active } = styles;

interface INavbarItemProps {
	children: React.ReactNode;
	href: string;
}

const NavbarItem = ({ children, href }: INavbarItemProps) => {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<li className={isActive ? active : ""}>
			<Link href={href}>{children}</Link>
		</li>
	);
};

export { NavbarItem };
