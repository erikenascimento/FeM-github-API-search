import React from "react"; // Reacts needs to be imported because of jest
// css
import styles from "./ThemeSelector.module.scss";
// React Hooks
import { useState } from "react";
// Custom components
import IconThemeDark from "../../icons/IconTheme/IconThemeDark";
import IconThemeLight from "../../icons/IconTheme/ThemeLight/indext";

const ThemeSelector: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	const toggleTheme = () => {
		// Check if the body has the dark theme class
		if (document.body.classList.contains("dark-theme")) {
			document.body.classList.remove("dark-theme"); // Switch to light theme
			setIsDarkMode(false);
		} else {
			document.body.classList.add("dark-theme"); // Switch to dark theme
			setIsDarkMode(true);
		}
	};

	return (
		<div
			data-testid="theme-selector"
			onClick={toggleTheme}
			style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
			className={styles.themeSelector}
		>
			<span data-testid="theme-text" className={styles.themeSelector__text}>
				{isDarkMode ? "Light" : "Dark"}
			</span>
			{isDarkMode ? <IconThemeLight /> : <IconThemeDark />}
		</div>
	);
};

export default ThemeSelector;
