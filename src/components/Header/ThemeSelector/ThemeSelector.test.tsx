import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeSelector from ".";

describe("Will test the feature to toggle between themes in the page", () => {
	it("should toggle between light and dark themes", () => {
		render(<ThemeSelector />);

		const themeText = screen.getByTestId("theme-text");

		// Initially, it should be "Dark"
		expect(themeText).toHaveTextContent("Dark");

		// Trigger a click to toggle the theme
		fireEvent.click(screen.getByTestId("theme-selector"));

		// After the toggle, it should change to "Light"
		expect(themeText).toHaveTextContent("Light");

		// Trigger another click to toggle back to the original theme
		fireEvent.click(screen.getByTestId("theme-selector"));

		// After the second toggle, it should change back to "Dark"
		expect(themeText).toHaveTextContent("Dark");
	});
});
