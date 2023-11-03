
/* eslint-disable react/react-in-jsx-scope */

import styles from './global.module.scss';
import {Main} from '@/components/MainPage';

export default function Home() {
	return (
		<section className={styles.main}>
			<Main/>
		</section>
	);
}
