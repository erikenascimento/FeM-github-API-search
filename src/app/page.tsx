"use client";
// css
import Card from "@/components/Card";
// Custom components
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
// Providers
import { UserProvider } from "@/contexts/UserContext";

const HomePage: React.FC = () => {
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
