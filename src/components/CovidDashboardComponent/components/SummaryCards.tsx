"use client";

import React from "react";
import styles from "./SummaryCards.module.scss";
import { DailyData } from "@/types/covid";
import { DetailData } from "@/components/DetailData/DetailData";
import CasesIcon from "/public/covidCases.svg";
import TestsIcon from "/public/covidTest.svg";
import DeathsIcon from "/public/covidDeath.svg";

const { summaryCards, summaryCards__card } = styles;

const SummaryCards = ({ data }: { data: DailyData }) => {
	let totalCases = 0;
	let totalDeaths = 0;
	let totalTests = 0;

	if (data) {
		totalCases = data.data.reduce((sum, entry) => sum + entry.cases.total.value, 0);
		totalDeaths = data.data.reduce((sum, entry) => sum + entry.outcomes.death.total.value, 0);
		totalTests = data.data.reduce((sum, entry) => sum + entry.testing.total.value, 0);
	}

	return (
		<div className={summaryCards}>
			<div className={summaryCards__card}>
				<DetailData
					imageSrc={CasesIcon}
					imageAlt='Covid Cases Icon'
					imageWidth={40}
					imageHeight={40}
					detailText='Total Cases'
					detailTextBold={totalCases.toLocaleString()}
				/>
			</div>
			<div className={summaryCards__card}>
				<DetailData
					imageSrc={TestsIcon}
					imageAlt='Covid Test Icon'
					imageWidth={40}
					imageHeight={40}
					detailText='Total Test'
					detailTextBold={totalTests.toLocaleString()}
				/>
			</div>
			<div className={summaryCards__card}>
				<DetailData
					imageSrc={DeathsIcon}
					imageAlt='Covid Death Icon'
					imageWidth={40}
					imageHeight={40}
					detailText='Total Deaths'
					detailTextBold={totalDeaths.toLocaleString()}
				/>
			</div>
		</div>
	);
};

export default SummaryCards;
