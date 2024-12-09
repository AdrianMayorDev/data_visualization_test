export interface INameFormLabelProps {
	htmlFor: string;
	children: React.ReactNode;
}

const NameFormLabel = ({ htmlFor, children }: INameFormLabelProps) => {
	return <label htmlFor={htmlFor}>{children}</label>;
};

export { NameFormLabel };
