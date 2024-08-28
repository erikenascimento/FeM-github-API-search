import styles from "./CardBio.module.scss";

const CardBio = () => {
	return (
		<section className={styles.cardBio}>
			<figure className={styles.cardBio__figure}>
				<img
					src="/profile-pic.jpg"
					alt="User profile picture"
					className={styles.cardBio__figure__img}
				/>
			</figure>
			<article className={styles.cardBio__article}>
				<h2 className={styles.cardBio__article__title}>User Name</h2>
				<h3 className={styles.cardBio__article__handle}>@userHandle</h3>
				<time className={styles.cardBio__article__time}>Joined Date</time>
			</article>
		</section>
	);
};

export default CardBio;
