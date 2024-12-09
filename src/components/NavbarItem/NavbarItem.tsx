import Link from "next/link";

interface INavbarItemProps {
	children: React.ReactNode;
	href: string;
}

const NavbarItem = ({ children, href }: INavbarItemProps) => {
	return (
		<li>
			<Link href={href}>{children}</Link>
		</li>
	);
};

export { NavbarItem };
