import React from "react";
// React hooks
import { render, screen } from "@testing-library/react";
// Custom components
import Card from ".";
import { useUser } from "@/contexts/UserContext";

// Mocks the useUser hook
jest.mock("@/contexts/UserContext");

describe("The Card component", () => {
	it("should fetch user data and display it correctly", () => {
		// Mock the fetchUser function
		const fetchUser = jest.fn();
		(useUser as jest.Mock).mockReturnValue({
			fetchUser,
		});

		render(<Card />);

		// Check if fetchUser was called with the correct argument
		expect(fetchUser).toHaveBeenCalledWith("erikenascimento");
	});
});
