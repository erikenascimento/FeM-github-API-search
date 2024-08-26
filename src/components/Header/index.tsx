// CSS
import styles from "./Header.module.scss";
// Custom components
import ThemeSelector from "../ThemeSelector";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Devfinder</h1>
			<ThemeSelector />
		</header>
	);
};

export default Header;
