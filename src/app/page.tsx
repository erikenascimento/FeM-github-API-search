"use client";

import Card from "@/components/Card";
// Custom components
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<main>
				<Card />
			</main>
		</>
	);
};

export default HomePage;
