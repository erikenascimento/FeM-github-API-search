// css
import styles from "./SearchBarInput.module.scss";

const SearchBarInput = () => {
	return (
		<input
			name="SearchInput"
			id="SearchInput"
			className={styles.searchBarInput}
			placeholder="Search GitHub username…"
		></input>
	);
};

export default SearchBarInput;
