"use client";
// css
import Card from "@/components/Card";
// Custom components
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
// React components
import { useEffect } from "react";
// Services
import { fetchGitHubUser } from "@/services/githubService";
// Providers
import { UserProvider } from "@/contexts/UserContext";

const HomePage: React.FC = () => {
	useEffect(() => {
		const fetchDefaultUser = async () => {
			try {
				const userData = await fetchGitHubUser("erikenascimento");
				console.log(userData);
			} catch (error) {
				console.error("Error fetching default user:", error);
			}
		};

		fetchDefaultUser();
	}, []);
	return (
		<UserProvider>
			<Header />
			<SearchBar />
			<main>
				<Card />
			</main>
		</UserProvider>
	);
};

export default HomePage;
