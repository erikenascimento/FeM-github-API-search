// Css
import styles from "./Card.module.scss";
// Custom components
import CardBio from "./CardBio";
import CardDrescription from "./CardDescription";

const Card = () => {
	return (
		<section className={styles.card}>
			<CardBio />
			<CardDrescription />
		</section>
	);
};

export default Card;
