// Css
import styles from "./CardAccountnumbers.module.scss";

const CardAccountnumbers = () => {
	return (
		<section className={styles.cardAccountnumbers}>
			<div className={styles.cardAccountnumbers__div}>
				<span>Repos</span>
				<data value="">0</data>
			</div>
			<div className={styles.cardAccountnumbers__div}>
				<span>Followers</span>
				<data value="">0</data>
			</div>
			<div className={styles.cardAccountnumbers__div}>
				<span>Following</span>
				<data value="">0</data>
			</div>
		</section>
	);
};

export default CardAccountnumbers;
