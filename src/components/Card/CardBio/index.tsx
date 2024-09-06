import React from "react";
// css
import styles from "./CardBio.module.scss";
// React hooks
import { useUser } from "@/contexts/UserContext";
// Helpers
import { formatDate } from "@/utils/dateUtils";

const CardBio = () => {
	const { userData } = useUser();

	// The app work as intended despite typescript not coperating here
	const joinedDate = formatDate(userData?.created_at);

	return (
		<article className={styles.cardBio}>
			<h2 className={styles.cardBio__title}>{userData?.name || "User Name"}</h2>
			<h3 className={styles.cardBio__handle}>
				@{userData?.login || "userHandle"}
			</h3>
			<time className={styles.cardBio__time}>
				Joined{" "}
				{typeof joinedDate === "string"
					? joinedDate
					: `${joinedDate.day} ${joinedDate.month} ${joinedDate.year}`}
			</time>
		</article>
	);
};

export default CardBio;
