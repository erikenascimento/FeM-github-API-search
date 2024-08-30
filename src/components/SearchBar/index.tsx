// css
import styles from "./SearchBar.module.scss";
// Custom components
import Button from "../Button";
import IconSearch from "../icons/IconSearch";
import SearchBarInput from "./SearchBarInput";
// React hooks
import { useState } from "react";
// Contexts
import { useUser } from "@/contexts/UserContext";

const SearchBar = () => {
	// setUsername is used on the input component
	const [username, setUsername] = useState("");
	// This brings from the context the function to fetch an user
	const { fetchUser } = useUser();

	const handleSearch = () => {
		if (username) {
			fetchUser(username);
		}
	};

	return (
		<section className={styles.searchBar}>
			<IconSearch />
			<SearchBarInput setUsername={setUsername} />
			<Button onClick={handleSearch}>Search</Button>
		</section>
	);
};

export default SearchBar;
