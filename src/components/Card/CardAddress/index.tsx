// Css
import IconLocation from "@/components/icons/IconLocation";
import styles from "./CardAddress.module.scss";
import IconLink from "@/components/icons/IconLink";
import IconX from "@/components/icons/IconX";
import IconCompany from "@/components/icons/IconCompany";

const CardAddress = () => {
	return (
		<section className={styles.cardAddress}>
			<div className={styles.cardAddress__div}>
				<IconLocation />
				<span className={styles.cardAddress__div__text}>Not Available</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconLink />
				<span className={styles.cardAddress__div__text}>Not Available</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconX />
				<span className={styles.cardAddress__div__text}>Not Available</span>
			</div>
			<div className={styles.cardAddress__div}>
				<IconCompany />
				<span className={styles.cardAddress__div__text}>Not Available</span>
			</div>
		</section>
	);
};

export default CardAddress;
