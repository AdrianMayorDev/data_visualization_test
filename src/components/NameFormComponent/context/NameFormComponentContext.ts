"use client";

import { createContext } from "react";

interface INameFormContext {
	name: string;
	setName: (name: string) => void;
}

export const NameFormComponentContext = createContext<INameFormContext | undefined>(undefined);
