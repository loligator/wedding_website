import FinalRsvpForm from '../Components/RsvpForm/FinalRsvpForm';
import PageStyles from './page.module.css';

export default function RsvpPage(): JSX.Element {
	return (
		<div className={PageStyles.mainColumn}>
			<FinalRsvpForm />
		</div>
	);
}