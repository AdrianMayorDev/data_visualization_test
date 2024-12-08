import { useNameFormContext } from "../hooks/useNameFormContext";
import styles from "./NameForm.module.scss";

const { nameFormContainer } = styles;

interface INameFormProps {
	children: React.ReactNode;
}

const NameForm = ({ children }: INameFormProps) => {
	const { name, setName } = useNameFormContext();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (name !== "") setName("");
		const form = e.target as HTMLFormElement;
		const value = (form.elements[0] as HTMLInputElement).value;
		setName(value);
	};

	return (
		<form className={nameFormContainer} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};
export { NameForm };
