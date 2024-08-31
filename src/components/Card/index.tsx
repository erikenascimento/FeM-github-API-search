import React from "react";
// Css
import styles from "./Card.module.scss";
// Context
import { useUser } from "@/contexts/UserContext";
// React hooks
import { useEffect } from "react";
// Custom components
import CardAccountnumbers from "./CardAccountnumbers";
import CardAddress from "./CardAddress";
import CardBio from "./CardBio";
import CardDrescription from "./CardDescription";
// Services

const Card: React.FC = () => {
	// This will fetch the data for "erikenascimento"
	// making it a default user
	const { fetchUser } = useUser();

	useEffect(() => {
		fetchUser("erikenascimento");
	}, [fetchUser]);

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
