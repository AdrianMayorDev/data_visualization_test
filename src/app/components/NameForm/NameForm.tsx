"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";
import { INameFormLabelProps, NameFormLabel } from "./components/NameFormLabel";
import { INameFormInputTextProps, NameFormInputText } from "./components/NameFormInputText";
import { NameFormSubmit } from "./components/NameFormSubmit";

interface INameFormContext {
	nameFormRef: React.RefObject<HTMLFormElement>;
	name: string;
	setName: (name: string) => void;
}

interface INameFormProps {
	children: React.ReactNode;
}

interface INameFormComposition {
	NameFormLabel: React.FC<INameFormLabelProps>;
	NameFormInputText: React.FC<INameFormInputTextProps>;
	NameFormSubmit: React.FC;
}

//  This component maintains internal state and provides those pieces of state & functions to its children.

const NameFormContext = createContext<INameFormContext | undefined>(undefined);

const NameForm: React.FC<INameFormProps> & INameFormComposition = ({ children }) => {
	const nameFormRef = useRef<HTMLFormElement>(null);
	const [name, setName] = useState("");

	const memoizedContextValue = useMemo(
		() => ({
			nameFormRef,
			name,
			setName,
		}),
		[name, setName]
	);

	return (
		<NameFormContext.Provider value={memoizedContextValue}>
			<form ref={nameFormRef}>{children}</form>
		</NameFormContext.Provider>
	);
};

// This Context hook allows our child components to easily reach into the Tabs context and get the pieces it needs.

export const useNameForm = () => {
	const context = useContext(NameFormContext);

	if (!context) {
		throw new Error("useNameForm must be used within a NameFormProvider");
	}

	return context;
};

NameForm.NameFormInputText = NameFormInputText;
NameForm.NameFormLabel = NameFormLabel;
NameForm.NameFormSubmit = NameFormSubmit;

export { NameForm };
