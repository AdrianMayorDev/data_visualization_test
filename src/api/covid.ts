import { DailyData } from "@/types/covid";
import { appTestBackend } from "./api";

const covidEnpoints = appTestBackend.injectEndpoints({
	endpoints: (builder) => ({
		getCovidData: builder.query<DailyData, void>({
			query: () => `https://api.covidtracking.com/v2/us/daily.json`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetCovidDataQuery } = covidEnpoints;
