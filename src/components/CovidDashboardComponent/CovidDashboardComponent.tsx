"use client";

import { useEffect, useState } from "react";
import { useGetCovidDataQuery } from "@/api/covid";
import SummaryCards from "./components/SummaryCards";
import DateSelector from "./components/DateSelector";
import CovidGraph from "./components/CovidGraph";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const CovidDashboardComponent = () => {
	const { data, isLoading, isError } = useGetCovidDataQuery();
	const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);

	useEffect(() => {
		if (data && data.data.length > 0) {
			const firstDate = data.data[data.data.length - 1].date;
			const lastDate = data.data[0].date;
			setDateRange([firstDate, lastDate]);
		}
	}, [data]);

	const handleDateRangeChange = (newDateRange: [string, string]) => {
		setDateRange(newDateRange);
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : isError || !data ? (
				<p>Error fetching data</p>
			) : (
				<>
					<SummaryCards data={data} />
					<CovidGraph data={data} dateRange={dateRange} />
					<DateSelector dateRange={dateRange} onDateRangeChange={handleDateRangeChange} />
				</>
			)}
		</>
	);
};

export default CovidDashboardComponent;
