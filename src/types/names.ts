type NameBase = {
	name: string;
	count: number;
};

type Country = {
	country_id: string;
	probability: number;
};

type NameAge = NameBase & {
	age: number;
};

type NameGender = NameBase & {
	gender: string;
	probability: number;
};

type NameNationality = NameBase & {
	country: Country[];
};

export type { NameAge, NameGender, NameNationality };
