import styles from './mainimage.module.css';

export interface MainImageProps {
	src: string;
}

export default function MainImage(props: MainImageProps) {
	return (
		<img className={styles.image} src={props.src} alt="Connor and Nikita in front of the fountain on Belle Isle"/>
	);
}