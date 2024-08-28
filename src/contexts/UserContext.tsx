// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchGitHubUser } from "@/services/githubService"; // Adjust the path as needed

// Define the shape of the user data
interface IUserData {
	// To use at CardBio
	avatar_url: string;
	name: string;
	login: string;
	created_at: Date;
	// To use at CardDescription
	bio: string | null;
	// To use at CardAccountnumbers
	public_repos: number;
	followers: number;
	following: number;
	// To use at CardAddress
	location: string | null;
	blog: string | null;
	twitter_username: string | null;
	company: string | null;
}

// Define context type
interface IUserContext {
	userData: IUserData | null;
	loading: boolean;
	error: string | null;
}

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
