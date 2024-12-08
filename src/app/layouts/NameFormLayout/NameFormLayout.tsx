import { NameForm } from "@/app/components/NameForm/components/NameForm";
import { NameFormComponent } from "@/app/components/NameForm/NameFormComponent";
import styles from "./NameFormLayout.module.scss";

const { nameFormLayoutContainer } = styles;

const NameFormLayout = () => {
	return (
		<section className={nameFormLayoutContainer}>
			<NameFormComponent>
				<NameForm>
					<NameFormComponent.NameFormLabel htmlFor='name'>Name data Finder:</NameFormComponent.NameFormLabel>
					<NameFormComponent.NameFormInputText label='name' />
					<NameFormComponent.NameFormSubmit />
				</NameForm>
				<NameFormComponent.NameFormResult />
			</NameFormComponent>
		</section>
	);
};

export { NameFormLayout };
