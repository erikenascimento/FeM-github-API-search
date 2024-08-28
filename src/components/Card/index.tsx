// Css
import styles from "./Card.module.scss";
import CardAccountnumbers from "./CardAccountnumbers";
// Custom components
import CardBio from "./CardBio";
import CardDrescription from "./CardDescription";

const Card = () => {
	return (
		<section className={styles.card}>
			<CardBio />
			<CardDrescription />
			<CardAccountnumbers />
		</section>
	);
};

export default Card;
