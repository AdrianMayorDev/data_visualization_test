import styles from "./BaseCard.module.scss";

const { baseCard } = styles;

interface INavbarItemProps {
	children: React.ReactNode;
}

const BaseCard = ({ children }: INavbarItemProps) => {
	return <div className={baseCard}>{children}</div>;
};

export { BaseCard };
