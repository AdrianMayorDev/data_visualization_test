"use client";

// This Context hook allows our child components to easily reach into the Tabs context and get the pieces it needs.

import { useContext } from "react";
import { NameFormComponentContext } from "../context/NameFormCopmonentContext";

export const useNameFormContext = () => {
	const context = useContext(NameFormComponentContext);

	if (!context) {
		throw new Error("useNameForm must be used within a NameFormProvider");
	}
	return context;
};
