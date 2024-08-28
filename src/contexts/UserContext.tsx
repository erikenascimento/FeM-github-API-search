// React hooks
import React, { createContext, useContext, useState, useEffect } from "react";
// Services
import { fetchGitHubUser } from "@/services/githubService";
// Interfaces
import IUserData from "@/interfaces/IUserData";
import IUserContext from "@/interfaces/IUserContext";

// Create the context with default values
const UserContext = createContext<IUserContext | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [userData, setUserData] = useState<IUserData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// This will create the default user for the app
		const fetchDefaultUser = async () => {
			try {
				const data = await fetchGitHubUser("erikenascimento");
				setUserData(data);
			} catch (err) {
				setError("Error fetching default user");
			} finally {
				setLoading(false); // inform that the loading is done
			}
		};

		fetchDefaultUser();
	}, []);

	return (
		<UserContext.Provider value={{ userData, loading, error }}>
			{children}
		</UserContext.Provider>
	);
};

// Custom hook to use the context
export const useUser = (): IUserContext => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
