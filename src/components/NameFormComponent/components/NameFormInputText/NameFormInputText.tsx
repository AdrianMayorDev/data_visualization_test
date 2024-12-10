import styles from "./NameFormInputText.module.scss";

const { inputTextContainer } = styles;

export interface INameFormInputTextProps {
	label: string;
}

const NameFormInputText = ({ label }: INameFormInputTextProps) => {
	return <input className={inputTextContainer} type='text' name={label} />;
};

export { NameFormInputText };
