// CSS
import styles from "./Header.module.scss";
// Custom components
import ThemeSelector from "../ThemeSelector";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>devfinder</h1>
			<ThemeSelector />
		</header>
	);
};

export default Header;
