import cx from "classnames";
import styles from "./hero.module.css";

export default function MainHero() {
	return(
		<div className={styles.textCenter}>

			<h1 className={cx(
				styles.header,
				styles.meddon
				)}>
				Nikita &amp; Connor
			</h1>
		</div>
	)
}