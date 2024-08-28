// React hooks
import React, { createContext, useContext, useState, useCallback } from "react";
// Interfaces
import IUserData from "@/interfaces/IUserData";
import IUserContext from "@/interfaces/IUserContext";
// Services
import { useFetchUser } from "@/hooks/UseFetchUser";

// Create the context
const UserContext = createContext<IUserContext | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// This will fetch the user and keep it inside the context
	const { userData, loading, error, fetchUser } = useFetchUser();

	return (
		<UserContext.Provider value={{ userData, loading, error, fetchUser }}>
			{children}
		</UserContext.Provider>
	);
};

// Custom hook to consume the context
export const useUser = (): IUserContext => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
