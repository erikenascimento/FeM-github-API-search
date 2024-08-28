// Css
import styles from "./Card.module.scss";
// Custom components
import CardBio from "./CardBio";

const Card = () => {
	return (
		<section className={styles.card}>
			<CardBio />
		</section>
	);
};

export default Card;
