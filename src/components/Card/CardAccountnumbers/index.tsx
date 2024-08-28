// Css
import { useUser } from "@/contexts/UserContext";
import styles from "./CardAccountnumbers.module.scss";

const CardAccountnumbers = () => {
	const { userData } = useUser();

	return (
		<section className={styles.cardAccountnumbers}>
			<div className={styles.cardAccountnumbers__div}>
				<span>Repos</span>
				<data value={userData?.public_repos}>
					{userData?.public_repos || "0"}
				</data>
			</div>
			<div className={styles.cardAccountnumbers__div}>
				<span>Followers</span>
				<data value={userData?.followers}>{userData?.followers || "0"}</data>
			</div>
			<div className={styles.cardAccountnumbers__div}>
				<span>Following</span>
				<data value={userData?.following}>{userData?.following || "0"}</data>
			</div>
		</section>
	);
};

export default CardAccountnumbers;
