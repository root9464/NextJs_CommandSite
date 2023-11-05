
/* eslint-disable react/react-in-jsx-scope */

import styles from './global.module.scss';
import {Main} from '@/components/pages/MainPages/MainPage';
import {Header} from '@/components/Header';

export default function Home() {
	return (
		<section className={styles.main}>
			<Header/>
			<Main/>
		</section>
	);
}
