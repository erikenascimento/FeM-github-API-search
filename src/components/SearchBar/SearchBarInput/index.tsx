import styles from "./SearchBarInput.module.scss";

const SearchBarInput = () => {
	return (
		<input
			name="SearchArea"
			id="SearchArea"
			className={styles.searchBarInput}
			placeholder="Search GitHub username…"
		></input>
	);
};

export default SearchBarInput;
