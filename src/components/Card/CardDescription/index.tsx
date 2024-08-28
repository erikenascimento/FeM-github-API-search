// Css
import { useUser } from "@/contexts/UserContext";
import styles from "./CardDescription.module.scss";

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
