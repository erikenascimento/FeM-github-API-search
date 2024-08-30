// css
import styles from "./Button.module.scss";

interface IButtonProps {
	children: string;
	onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
