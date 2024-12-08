"use client";

import { useGetAgeQuery, useGetGenderQuery, useGetNationalityQuery } from "@/api/names";

const useNameData = (name: string) => {
	const { data: ageData, error: ageError, isFetching: ageFetching } = useGetAgeQuery(name, { skip: !name });
	const { data: genderData, error: genderError, isFetching: genderFetching } = useGetGenderQuery(name, { skip: !name });
	const {
		data: nationalityData,
		error: nationalityError,
		isFetching: nationalityFetching,
	} = useGetNationalityQuery(name, { skip: !name });

	const isError = !!ageError || !!genderError || !!nationalityError;
	return {
		ageData,
		genderData,
		nationalityData,
		ageFetching,
		genderFetching,
		nationalityFetching,
		isError,
	};
};

export { useNameData };
