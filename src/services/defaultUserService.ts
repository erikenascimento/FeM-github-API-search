import { fetchGitHubUser } from "@/services/githubService";
import IUserData from "@/interfaces/IUserData"; // Import the IUserData interface

export const fetchDefaultUser = async (): Promise<IUserData | null> => {
	try {
		const data = await fetchGitHubUser("erikenascimento");
		return data;
	} catch (err) {
		console.error("Error fetching default user:", err);
		return null;
	}
};
