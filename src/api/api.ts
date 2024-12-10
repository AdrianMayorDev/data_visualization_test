import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appTestBackend = createApi({
	reducerPath: "appTestBackend",
	baseQuery: fetchBaseQuery({
		baseUrl: "",
	}),

	endpoints: () => ({}),
});
