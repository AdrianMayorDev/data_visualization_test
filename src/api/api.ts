import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appTestBackend = createApi({
	reducerPath: "appTestBackend",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_TEST_BACKEND_API,
	}),

	endpoints: () => ({}),
});
