import { NameAge, NameGender, NameNationality } from "../types/names";
import { appTestBackend } from "./api";

const namesEndpoint = appTestBackend.injectEndpoints({
	endpoints: (builder) => ({
		getAge: builder.query<NameAge, NameAge["name"]>({
			query: (name) => `/api/agify/${name}`,
		}),
		getGender: builder.query<NameGender, NameGender["name"]>({
			query: (name) => `/api/genderize/${name}`,
		}),
		getNationality: builder.query<NameNationality, NameNationality["name"]>({
			query: (name) => `/api/nationalize/${name}`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetAgeQuery, useGetGenderQuery, useGetNationalityQuery } = namesEndpoint;
