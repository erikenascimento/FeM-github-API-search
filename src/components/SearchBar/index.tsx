import React from "react";
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
	const { userData, error, fetchUser } = useUser();

	const handleSearch = () => {
		if (username) {
			fetchUser(username);
		}
	};

	return (
		<section className={styles.searchBar}>
			<div className={styles.searchBar__left}>
				<IconSearch />
				<SearchBarInput setUsername={setUsername} />
			</div>
			<div className={styles.searchBar__right}>
				{/* Conditionally display 'No results' if there's an error and no user data */}
				{error && (
					<span
						className={styles.searchBar__right__noResults}
						data-testid="noResults"
					>
						No results
					</span>
				)}
				<Button onClick={handleSearch}>Search</Button>
			</div>
		</section>
	);
};

export default SearchBar;
