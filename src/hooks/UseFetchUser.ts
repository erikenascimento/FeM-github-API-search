// React hooks
import { useState, useCallback } from "react";
// Services
import { fetchGitHubUser } from "@/services/fetchGitHubUser";
// Interfaces
import IUserData from "@/interfaces/IUserData";

// Handles the state and side effects related to fetching the user data. It uses the fetchGitHubUser function to get the data but also manages loading and error states.
export const useFetchUser = () => {
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

	return { userData, loading, error, fetchUser };
};
