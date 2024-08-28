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
		<section className={styles.cardBio}>
			<figure className={styles.cardBio__figure}>
				<img
					src={userData?.avatar_url || "/profile-pic.jpg"}
					alt={`${userData?.name || "User"} profile picture`}
					className={styles.cardBio__figure__img}
				/>
			</figure>
			<article className={styles.cardBio__article}>
				<h2 className={styles.cardBio__article__title}>
					{userData?.name || "User Name"}
				</h2>
				<h3 className={styles.cardBio__article__handle}>
					@{userData?.login || "userHandle"}
				</h3>
				<time className={styles.cardBio__article__time}>
					Joined{" "}
					{typeof joinedDate === "string"
						? joinedDate
						: `${joinedDate.day} ${joinedDate.month} ${joinedDate.year}`}
				</time>
			</article>
		</section>
	);
};

export default CardBio;
