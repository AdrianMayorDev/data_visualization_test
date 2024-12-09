import styles from "./NameFormSubmit.module.scss";

const { nameFormSubmit } = styles;

export interface INameFormSubmitProps {
	value: string;
}

const NameFormSubmit = ({ value }: INameFormSubmitProps) => {
	return <input type='submit' value={value} className={nameFormSubmit} />;
};

export { NameFormSubmit };
