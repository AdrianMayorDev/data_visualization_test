type CalculatedData = {
	population_percent: number;
	change_from_prior_day: number;
	seven_day_change_percent: number;
	seven_day_average?: number;
};

type TotalData = {
	value: number;
	calculated: CalculatedData;
};

interface HospitalizationData {
	currently: {
		value: number;
		calculated: CalculatedData;
	};
	in_icu?: {
		currently: {
			value: number;
			calculated: CalculatedData;
		};
	};
	on_ventilator?: {
		currently: {
			value: number;
			calculated: CalculatedData;
		};
	};
}

interface DeathData {
	total: TotalData;
}

interface DailyEntry {
	date: string;
	states: number;
	cases: {
		total: TotalData;
	};
	testing: {
		total: TotalData;
	};
	outcomes: {
		hospitalized: HospitalizationData;
		death: DeathData;
	};
}

type DailyData = DailyEntry[];

export type { DailyData };
