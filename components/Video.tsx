
'use client';
import styles from '@/app/global.module.scss';
export type Props = {
	url: string;
};
const Video = (props: Props): JSX.Element => (
	<>
		<video autoPlay muted loop className={styles.video}>
			<source src={props.url} type='video/mp4'/>
		</video>
	</>
);
export {Video};
