"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import { ReactNode } from "react";

interface IClientProviderProps {
	children: ReactNode;
}

const ClientProvider = ({ children }: IClientProviderProps) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
