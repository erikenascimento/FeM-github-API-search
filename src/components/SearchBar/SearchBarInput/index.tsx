// css
import { useState } from "react";
// React hooks
import styles from "./SearchBarInput.module.scss";

//Since the username will come from the input. We will use setUsername as a prop for this component
// Note that setUsername is a void funcion since it is an useState element
const SearchBarInput = ({
	setUsername,
}: {
	setUsername: (username: string) => void;
}) => {
	const [inputValue, setInputValue] = useState("");

	// Here we're typing the event that will trigger as a change event of an HTML input
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// This is for the local state
		setInputValue(e.target.value);
		// This is for the state from the parent component
		setUsername(e.target.value);
	};

	return (
		<input
			name="SearchInput"
			id="SearchInput"
			className={styles.searchBarInput}
			placeholder="Search GitHub username…"
			value={inputValue}
			// This will call handleChange whenever the input changes
			onChange={handleChange}
		></input>
	);
};

export default SearchBarInput;
