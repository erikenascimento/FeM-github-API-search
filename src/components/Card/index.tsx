// Css
import styles from "./Card.module.scss";
import CardAccountnumbers from "./CardAccountnumbers";
import CardAddress from "./CardAddress";
// Custom components
import CardBio from "./CardBio";
import CardDrescription from "./CardDescription";

const Card = () => {
	return (
		<section className={styles.card}>
			<CardBio />
			<CardDrescription />
			<CardAccountnumbers />
			<CardAddress />
		</section>
	);
};

export default Card;
