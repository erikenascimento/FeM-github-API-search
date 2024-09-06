import React from "react";
// css
import styles from "./CardAvatar.module.scss";
// Contexts
import { useUser } from "@/contexts/UserContext";

const CardAvatar = () => {
	const { userData } = useUser();
	return (
		<figure className={styles.cardAvatar}>
			<img
				src={userData?.avatar_url || "/profile-pic.jpg"}
				alt={`${userData?.name || "User"} profile picture`}
				className={styles.cardAvatar__img}
			/>
		</figure>
	);
};

export default CardAvatar;
