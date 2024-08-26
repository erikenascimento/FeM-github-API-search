import { useState } from "react";
import IconThemeDark from "../icons/IconTheme/IconThemeDark";
import IconThemeLight from "../icons/IconTheme/ThemeLight/indext";

const ThemeSelector: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		// Logic to apply theme to the application, e.g., updating a context or class
	};

	return (
		<div
			data-test="theme-selector"
			onClick={toggleTheme}
			style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
		>
			<span data-test="theme-text">{isDarkMode ? "Light" : "Dark"}</span>
			{isDarkMode ? <IconThemeLight /> : <IconThemeDark />}
		</div>
	);
};

export default ThemeSelector;
