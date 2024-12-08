"use client";

import { useNameData } from "../../hooks/useNameData";
import styles from "@/app/components/NameForm/components/NameFormResult/NameFormResult.module.scss";
import defaultData from "@/data/defaultData.json";
import AgeComponent from "./components/AgeComponent";
import GenderComponent from "./components/GenderComponent";
import ProbabilityComponent from "./components/ProbabilityComponent";
import NationalityComponent from "./components/NationalityComponent";
import { useNameFormContext } from "../../hooks/useNameFormContext";

const { nameFormResult, nameFormResult__dataSectionWrapper, nameFormResult__dataSection, error } = styles;

const NameFormResult = () => {
	const { name } = useNameFormContext();
	const { ageData, genderData, nationalityData, ageFetching, genderFetching, nationalityFetching, isError } = useNameData(name);

	const nameDisplay = name || defaultData.name;
	const age = ageData?.age || defaultData.ageData.age;
	const gender = genderData?.gender || defaultData.genderData.gender;
	const genderProbability = genderData?.probability || defaultData.genderData.probability;
	const nationality = nationalityData?.country || defaultData.nationalityData.country;

	if (isError) {
		return <p className={error}>Error, please try again</p>;
	}

	return (
		<section className={nameFormResult}>
			<h2>Data for {nameDisplay} name</h2>
			<div className={nameFormResult__dataSectionWrapper}>
				<ul className={nameFormResult__dataSection}>
					<AgeComponent age={age} ageFetching={ageFetching} />
					<GenderComponent gender={gender} genderFetching={genderFetching} />
					<ProbabilityComponent probability={genderProbability} genderFetching={genderFetching} />
				</ul>
				<NationalityComponent nationality={nationality} nationalityFetching={nationalityFetching} />
			</div>
		</section>
	);
};

export { NameFormResult };
