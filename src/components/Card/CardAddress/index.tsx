// Css
import styles from "./CardAddress.module.scss";
// Custom components
import IconLocation from "@/components/icons/IconLocation";
import IconLink from "@/components/icons/IconLink";
import IconX from "@/components/icons/IconX";
import IconCompany from "@/components/icons/IconCompany";
// Contexts
import { useUser } from "@/contexts/UserContext";

const CardAddress = () => {
	const { userData } = useUser();

	return (
		<section className={styles.cardAddress}>
			<div className={styles.cardAddress__div}>
				<IconLocation />
				<span className={styles.cardAddress__div__text}>
					{userData?.location || "Not Available"}
				</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconLink />
				<span className={styles.cardAddress__div__text}>
					{userData?.blog || "Not Available"}
				</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconX />
				<span className={styles.cardAddress__div__text}>
					{userData?.twitter_username || "Not Available"}
				</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconCompany />
				<span className={styles.cardAddress__div__text}>
					{userData?.company || "Not Available"}
				</span>
			</div>
		</section>
	);
};

export default CardAddress;
