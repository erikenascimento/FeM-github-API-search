// React hooks
import React, { createContext, useContext, useState, useCallback } from "react";
// Interfaces
import IUserData from "@/interfaces/IUserData";
import IUserContext from "@/interfaces/IUserContext";
// Services
import { fetchGitHubUser } from "@/services/fetchGitHubUser";

// Create the context
const UserContext = createContext<IUserContext | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [userData, setUserData] = useState<IUserData | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// useCallback will prevent the function to be recalled every render
	const fetchUser = useCallback(async (username: string) => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchGitHubUser(username);
			setUserData(data);
		} catch (err) {
			setError("Error fetching user data");
		} finally {
			setLoading(false);
		}
	}, []);

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
