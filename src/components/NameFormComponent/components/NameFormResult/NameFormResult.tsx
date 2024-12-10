"use client";

import { useNameData } from "../../hooks/useNameData";
import styles from "./NameFormResult.module.scss";
import defaultData from "@/data/defaultData.json";
import AgeComponent from "./components/AgeComponent";
import GenderComponent from "./components/GenderComponent";
import NationalityComponent from "./components/NationalityComponent/NationalityComponent";
import { useNameFormContext } from "../../hooks/useNameFormContext";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { BaseCard } from "@/components/BaseCard/BaseCard";

const { nameFormResult, nameFormResult__dataSection, error } = styles;

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

	if (!age || !gender || nationality.length === 0) {
		return <p className={error}>No name found</p>;
	}

	return (
		<BaseCard className={nameFormResult}>
			<h2> {nameDisplay}</h2>
			{ageFetching || genderFetching || nationalityFetching ? (
				<LoadingSpinner />
			) : (
				<>
					<ul className={nameFormResult__dataSection}>
						<AgeComponent age={age} ageFetching={ageFetching} />
						<GenderComponent gender={gender} probability={genderProbability} genderFetching={genderFetching} />
					</ul>
					<NationalityComponent nationality={nationality} nationalityFetching={nationalityFetching} />
				</>
			)}
		</BaseCard>
	);
};

export { NameFormResult };
