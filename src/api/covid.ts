import { DailyData } from "@/types/covid";
import { appTestBackend } from "./api";

const covidEnpoints = appTestBackend.injectEndpoints({
	endpoints: (builder) => ({
		getCovidData: builder.query<DailyData, void>({
			query: () => `/api/covid/historical`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetCovidDataQuery } = covidEnpoints;
