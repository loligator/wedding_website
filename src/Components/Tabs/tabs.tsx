import { Link } from 'react-router-dom';
import styles from './tabs.module.css';

export interface TabsProps {
	tablist: {[name: string]: string};
}

export default function Tabs(props: TabsProps) {
	return (
		<div className={styles.tablist}>
			{Object.entries(props.tablist).map(([name, link]) => {
				return (
					<div className={styles.tab}>
						<Link to={link}>{name}</Link>
					</div>
				);
			})}
		</div>
	);
}