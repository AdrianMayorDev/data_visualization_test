"use client";

import { useNameData } from "../../hooks/useNameData";
import styles from "./NameFormResult.module.scss";
import defaultData from "@/data/defaultData.json";
import AgeComponent from "./components/AgeComponent";
import GenderComponent from "./components/GenderComponent";
import NationalityComponent from "./components/NationalityComponent";
import { useNameFormContext } from "../../hooks/useNameFormContext";
import Image from "next/image";
import SVGSpinner from "/public/svg-spinner.svg";

const { nameFormResult, nameFormResult__dataSection, nameFormResult__loadingSpinner, error } = styles;

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
			<h2> {nameDisplay}</h2>
			{ageFetching || genderFetching || nationalityFetching ? (
				<Image className={nameFormResult__loadingSpinner} src={SVGSpinner} alt='Spinner Icon' height={40} width={40} />
			) : (
				<>
					<ul className={nameFormResult__dataSection}>
						<AgeComponent age={age} ageFetching={ageFetching} />
						<GenderComponent gender={gender} probability={genderProbability} genderFetching={genderFetching} />
					</ul>
					<NationalityComponent nationality={nationality} nationalityFetching={nationalityFetching} />
				</>
			)}
		</section>
	);
};

export { NameFormResult };