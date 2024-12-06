export interface INameFormInputTextProps {
	label: string;
}

const NameFormInputText = ({ label }: INameFormInputTextProps) => {
	return <input type='text' name={label} />;
};

export { NameFormInputText };
