import { NameAge, NameGender, NameNationality } from "../types/names";
import { appTestBackend } from "./api";

const namesEndpoint = appTestBackend.injectEndpoints({
	endpoints: (builder) => ({
		getAge: builder.query<NameAge, NameAge["name"]>({
			query: (name) => `https://api.agify.io/?name=${name}`,
		}),
		getGender: builder.query<NameGender, NameGender["name"]>({
			query: (name) => `https://api.genderize.io/?name=${name}`,
		}),
		getNationality: builder.query<NameNationality, NameNationality["name"]>({
			query: (name) => `https://api.nationalize.io/?name=${name}`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetAgeQuery, useGetGenderQuery, useGetNationalityQuery } = namesEndpoint;
