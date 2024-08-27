import styles from "./SearchBarArea.module.scss";

const SearchBarArea = () => {
	return (
		<input
			name="SearchArea"
			id="SearchArea"
			className={styles.searchBarArea}
			placeholder="Search GitHub username…"
		></input>
	);
};

export default SearchBarArea;
