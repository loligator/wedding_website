import { Link } from 'react-router-dom';
import FinalRsvpForm from '../Components/RsvpForm/RsvpForm';
import PageStyles from './page.module.css';

export default function RsvpPage(): JSX.Element {
	return (
		<>
			<div className={PageStyles.backButton}>
				<Link to="/">← Back</Link>
			</div>
			<div className={PageStyles.mainColumn}>
				<FinalRsvpForm />
			</div>
		</>
	);
}