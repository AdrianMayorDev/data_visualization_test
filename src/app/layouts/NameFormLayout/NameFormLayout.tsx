import { NameForm } from "@/app/components/NameForm/NameForm";

const NameFormLayout = () => {
	return (
		<section>
			<h1>Name finder</h1>
			<NameForm>
				<NameForm.NameFormLabel htmlFor='name'>Name:</NameForm.NameFormLabel>
				<NameForm.NameFormInputText label='name' />
				<NameForm.NameFormSubmit></NameForm.NameFormSubmit>
			</NameForm>
		</section>
	);
};

export { NameFormLayout };
