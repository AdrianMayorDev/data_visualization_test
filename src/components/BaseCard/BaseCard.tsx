import styles from "./BaseCard.module.scss";

const { baseCard } = styles;

interface INavbarItemProps {
	children: React.ReactNode;
	className?: string;
}

const BaseCard = ({ children, className }: INavbarItemProps) => {
	return <div className={`${baseCard} ${className}`}>{children}</div>;
};

export { BaseCard };
