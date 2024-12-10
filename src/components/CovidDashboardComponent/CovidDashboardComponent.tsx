"use client";

import { useEffect, useState } from "react";
import { useGetCovidDataQuery } from "@/api/covid";
import SummaryCards from "./components/SummaryCards";
import DateSelector from "./components/DateSelector";
import CovidGraph from "./components/CovidGraph";
import { BaseCard } from "../BaseCard/BaseCard";

const CovidDashboardContainer = () => {
	const { data, isLoading, isError } = useGetCovidDataQuery();
	const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);

	useEffect(() => {
		if (data && data.data.length > 0) {
			const firstDate = data.data[data.data.length - 1].date;
			const lastDate = data.data[0].date;
			setDateRange([firstDate, lastDate]);
		}
	}, [data]);

	if (isLoading) return <p>Loading...</p>;
	if (isError || !data) return <p>Error fetching data</p>;

	const handleDateRangeChange = (newDateRange: [string, string]) => {
		setDateRange(newDateRange);
	};

	return (
		<BaseCard>
			<SummaryCards data={data} />
			<CovidGraph data={data} dateRange={dateRange} />
			<DateSelector dateRange={dateRange} onDateRangeChange={handleDateRangeChange} />
		</BaseCard>
	);
};

export default CovidDashboardContainer;
