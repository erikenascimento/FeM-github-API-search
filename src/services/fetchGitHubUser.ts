import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/users";

// Makes the HTTP request and returns the data.
export const fetchGitHubUser = async (username: string) => {
	try {
		const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching GitHub user:", error);
		throw error;
	}
};
