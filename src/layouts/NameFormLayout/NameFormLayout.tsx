"use client";
import { NameFormComponent } from "@/components/NameFormComponent/NameFormComponent";
import styles from "./NameFormLayout.module.scss";
import { NameForm } from "@/components/NameFormComponent/components/NameForm/NameForm";

const { nameFormLayoutContainer, nameFormLayoutContainer__cardForm } = styles;

const NameFormLayout = () => {
	return (
		<section className={nameFormLayoutContainer}>
			<NameFormComponent>
				<NameForm>
					<NameFormComponent.NameFormLabel htmlFor='name'>Name Data Finder:</NameFormComponent.NameFormLabel>
					<div className={nameFormLayoutContainer__cardForm}>
						<NameFormComponent.NameFormInputText label='name' />
						<NameFormComponent.NameFormSubmit value='Search' />
					</div>
				</NameForm>
				<NameFormComponent.NameFormResult />
			</NameFormComponent>
		</section>
	);
};

export { NameFormLayout };
