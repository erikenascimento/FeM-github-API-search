// css
import styles from "./SearchBar.module.scss";
// Custom components
import Button from "../Button";
import IconSearch from "../icons/IconSearch";
import SearchBarInput from "./SearchBarInput";

const SearchBar = () => {
	return (
		<section className={styles.searchBar}>
			<IconSearch />
			<SearchBarInput />
			<Button>Search</Button>
		</section>
	);
};

export default SearchBar;
