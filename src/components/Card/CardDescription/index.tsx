import React from "react";
// css
import styles from "./CardDescription.module.scss";
// React hooks
import { useUser } from "@/contexts/UserContext";

const CardDrescription = () => {
	const { userData } = useUser();

	return (
		<p className={styles.cardDescription}>
			{userData?.bio ||
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
		</p>
	);
};

export default CardDrescription;
