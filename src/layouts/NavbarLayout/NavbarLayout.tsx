import { NavbarItem } from "@/components/NavbarItem/NavbarItem";
import styles from "./NavbarLayout.module.scss";

const { navBarContainer } = styles;

const NavbarLayout = () => {
	return (
		<nav className={navBarContainer}>
			<ul>
				<NavbarItem href='/'> Name Finder</NavbarItem>
				<NavbarItem href='/covid'> COVID Data</NavbarItem>
			</ul>
		</nav>
	);
};

export { NavbarLayout };
