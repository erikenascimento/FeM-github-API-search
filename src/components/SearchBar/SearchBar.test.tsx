import React from "react";
// Testing elements
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better assertions
// Custom components
import SearchBar from ".";
// Contexts
import { UserProvider } from "@/contexts/UserContext";

// Mock the fetchUser function
jest.mock("@/services/fetchGitHubUser", () => ({
	fetchGitHubUser: jest.fn(),
}));

import { fetchGitHubUser } from "@/services/fetchGitHubUser";

describe("Searching for an invalid user", () => {
	it("should display 'No results'", async () => {
		// Mock the fetchGitHubUser to reject the promise, simulating an error
		(fetchGitHubUser as jest.Mock).mockRejectedValueOnce(
			new Error("User not found")
		);

		render(
			<UserProvider>
				<SearchBar />
			</UserProvider>
		);

		// Simulate typing an invalid username
		const input = screen.getByTestId("searchInput");
		fireEvent.change(input, { target: { value: "anActualInvalidUser" } });

		// Simulate clicking the search button
		const button = screen.getByTestId("searchButton");
		fireEvent.click(button);

		// Wait for the error to cause the "No results" span to show up
		await waitFor(() => {
			expect(screen.getByTestId("noResults")).toBeInTheDocument();
		});
	});
});
