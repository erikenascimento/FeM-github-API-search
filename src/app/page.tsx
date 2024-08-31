"use client";
import React from "react";

// Custom components
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
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
