import styles from "./SearchBarArea.module.scss";

const SearchBarArea = () => {
	return (
		<textarea
			name="SearchArea"
			id="SearchArea"
			className={styles.searchBarArea}
			placeholder="Search GitHub username…"
		></textarea>
	);
};

export default SearchBarArea;
