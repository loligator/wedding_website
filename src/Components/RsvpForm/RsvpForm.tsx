import styles from './RsvpForm.module.css';

export default function RsvpForm() {
	return (
		<div className={styles.form}>
			<form>
				<input name={"Name"} placeholder='FirstName'></input>
			</form>
		</div>
	);
}