import { Link } from 'react-router-dom';
import cx from 'classnames';
import FinalRsvpForm from '../Components/RsvpForm/RsvpForm';
import PageStyles from './page.module.css';

export default function RsvpPage(): JSX.Element {
	return (
		<div className={PageStyles.mainColumn}>
			<div className={PageStyles.textCenter}>
				<h3>You're Invited! Enter your information below.</h3>
			</div>
			<div className={PageStyles.backButton}>
				<Link to="/">← Back</Link>
			</div>
			<div className={PageStyles.mainColumn}>
				<FinalRsvpForm />
			</div>
		</div>
	);
}