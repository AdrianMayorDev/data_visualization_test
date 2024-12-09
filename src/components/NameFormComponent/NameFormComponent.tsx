"use client";

import { useMemo, useState } from "react";
import { NameFormResult } from "./components/NameFormResult/NameFormResult";
import { NameFormComponentContext } from "./context/NameFormCopmonentContext";
import { INameFormLabelProps, NameFormLabel } from "./components/NameFormLabel";
import { INameFormInputTextProps, NameFormInputText } from "./components/NameFormInputText/NameFormInputText";
import { INameFormSubmitProps, NameFormSubmit } from "./components/NameFormSubmit/NameFormSubmit";

interface INameFormComponentProps {
	children: React.ReactNode;
}

interface INameFormComponentComposition {
	NameFormLabel: React.FC<INameFormLabelProps>;
	NameFormInputText: React.FC<INameFormInputTextProps>;
	NameFormSubmit: React.FC<INameFormSubmitProps>;
	NameFormResult: React.FC;
}

//  This component maintains internal state and provides those pieces of state & functions to its children.

const NameFormComponent: React.FC<INameFormComponentProps> & INameFormComponentComposition = ({ children }) => {
	const [name, setName] = useState("");

	const memoizedContextValue = useMemo(
		() => ({
			name,
			setName,
		}),
		[name, setName]
	);

	return <NameFormComponentContext.Provider value={memoizedContextValue}>{children}</NameFormComponentContext.Provider>;
};

NameFormComponent.NameFormInputText = NameFormInputText;
NameFormComponent.NameFormLabel = NameFormLabel;
NameFormComponent.NameFormSubmit = NameFormSubmit;
NameFormComponent.NameFormResult = NameFormResult;

export { NameFormComponent };
